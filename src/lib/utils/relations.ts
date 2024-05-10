import type { User, Conversation } from '$lib/types/types';

export const getUser = (id: string, users?: User[]) => {
    if(users) {
        return users.find(user => user.id === id)
    }
}

export const getChannel = (id: string, channels?: Conversation[]) => {
    if(channels) {
        return channels.find(channel => channel.id === id)
    }
}
