import type { LayoutServerLoad } from './$types';
import type { User, Conversation, LoadData, Team, Channel } from '$lib/types/types';
import { getChannels, getUsers, getTeam, getMessages } from '$lib/utils/sqlite';
import { checkAuth } from '$lib/utils/auth';
import { redirect } from '@sveltejs/kit';


export const load = (async ( req) => {

   try {
    await checkAuth(req)
   } catch (e) {
    return redirect(302, '/login')
   }

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
    team: team as Team,
    channel_id: channelId,
    is_thread: false,
    messages
   } as LoadData
  };
}) satisfies LayoutServerLoad;