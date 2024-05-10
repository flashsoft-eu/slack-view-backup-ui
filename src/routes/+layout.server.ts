import type { LayoutServerLoad } from './$types';
import type { User, Conversation, LoadData, TeamApiResponse, Channel } from '$lib/types/types';
import { getChannels, getUsers, getTeam, getMessages } from '$lib/utils/sqlite';
 
export const load = (async () => {

  const [channels, users, team] = await Promise.all(
    [new Promise((resolve) => {
      resolve(getChannels())
    }), 
    new Promise((resolve) => {
      resolve(getUsers())
    }),
    new Promise((resolve) => {
      resolve(getTeam())
    })]);

    const channelId =  (channels as Channel[])[0].id
  
    const messages =  getMessages(channelId)
  return {
   data : {
    channels: channels as Conversation[],
    users: users as User[],
    team: team as TeamApiResponse,
    channel_id: channelId,
    is_thread: false,
    messages
   } as LoadData
  };
}) satisfies LayoutServerLoad;