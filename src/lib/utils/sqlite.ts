import { CONSTANTS } from './constants';
import sqlite from 'better-sqlite3';
import type { Message, User, Channel, Team } from '$lib/types/types';

export const db = sqlite(CONSTANTS.sqliteDbPath, { verbose: console.log });

export const checkDbExists = async () => {
    const path = CONSTANTS.sqliteDbPath;
    const fs = await import('fs');
    if (!fs.existsSync){
        throw new Error(`Database file not found at ${path}`);
    }
}

export const getTables = () => {
    return db.prepare(`SELECT 
            name
        FROM 
            sqlite_schema
        WHERE 
            type ='table' AND 
            name NOT LIKE 'sqlite_%';`).all()
}

export const getUsers = () => {
    return db.prepare('SELECT * FROM users').all() as User[];
}

export const getSpecificUser = (userId: string) => {
    return db.prepare('SELECT * FROM users WHERE id = ?').get(userId) as User;
}

export const getSpecificChannel = (channelId: string) => {
    return db.prepare('SELECT * FROM conversations WHERE id = ?').get(channelId) as Channel;
}

export const getChannels = () => {
    return db.prepare('SELECT * FROM conversations').all() as Channel[];
}

export const getTeam = () => {
    return db.prepare('SELECT * FROM teams').get() as Team;
}

export const getMessages = (channelId: string, threadId?: string, limit?: number, offset?: number) => {
    if (!limit) limit = 20;
    if (!offset) offset = 0;
    const query = `SELECT * FROM messages WHERE channel = ? ${threadId ? 'AND thread_ts = ?' :''} ORDER BY ts DESC LIMIT ? OFFSET ? `;
    const params = threadId ? [channelId, threadId, limit, offset] : [channelId, limit, offset];
    return db.prepare(query).all(params) as Message[];
}

export const getThread = (channelId: string, threadId: string) => {
    const query = `SELECT * FROM messages_threads WHERE channel = ? ${threadId ? 'AND thread_ts = ?' :''} ORDER BY ts ASC`;
    return db.prepare(query).all([channelId, threadId]) as Message[];
}