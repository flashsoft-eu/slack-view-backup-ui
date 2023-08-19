import type { User, Conversation } from '$lib/types/types';

export const getUser = (id: string, users: User[]) => {
    const user = users.find(user => user.id === id)
    return user
}

export const getChannel = (id: string, channels: Conversation[]) => {
    const channel = channels.find(channel => channel.id === id)
    return channel
}