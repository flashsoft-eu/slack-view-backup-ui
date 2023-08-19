import type { LayoutServerLoad } from './$types';
import { getJsonFromDataFile } from '$lib/utils/file';
import type { User, Conversation, ChannelRoot, LoadData, TeamApiResponse } from '$lib/types/types';

export const load = (async () => {

  const [channels, users, team] = await Promise.all([getJsonFromDataFile('channels.json'), getJsonFromDataFile('users.json'), getJsonFromDataFile('team.json')])
  const channel = await getJsonFromDataFile(`conversations_${channels[0].id}.json`) as ChannelRoot
  return {
   data : {
    channels: channels as Conversation[],
    users: users as User[],
    team: team as TeamApiResponse,
    channel,
    channel_id: channels[0].id,
    is_thread: false
   } as LoadData
  };
}) satisfies LayoutServerLoad;