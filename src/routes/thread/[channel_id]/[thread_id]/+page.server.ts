import { getJsonFromDataFile } from '$lib/utils/file';
import type { ChannelThread, LoadData } from '$lib/types/types';
import type { PageServerLoad } from './$types';


export const load = (async ({ params  }) => {
    const [channels, users, team] = await Promise.all([getJsonFromDataFile('channels.json'), getJsonFromDataFile('users.json'), getJsonFromDataFile('team.json')])
  
  const { channel_id, thread_id } = params

  const channel_thread = await getJsonFromDataFile(`conversations_${channel_id}_${thread_id}.json`) as ChannelThread

  return {
   data : {
    channel_thread,
    channel_id,
    is_thread: true,
    channels,
    users,
    team
    
   } as LoadData
  };
}) satisfies PageServerLoad