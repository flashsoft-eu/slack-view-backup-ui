import { CONSTANTS } from './constants';
import sqlite from 'better-sqlite3';

export const db = sqlite(CONSTANTS.sqliteDbPath, { verbose: console.log });

export const getUsers = () => {
    return db.prepare('SELECT * FROM users').all();
}

export const getChannels = () => {
    return db.prepare('SELECT * FROM channels').all();
}

export const getTeam = () => {
    return db.prepare('SELECT * FROM team').get();
}

export const getConversation = (channelId: string) => {
    return db.prepare('SELECT * FROM conversations WHERE channel_id = ?').all(channelId);
}

export const getMessages = (channelId: string, threadId: string) => {
    return db.prepare('SELECT * FROM messages WHERE channel_id = ? AND thread_id = ?').all(channelId, threadId);
}