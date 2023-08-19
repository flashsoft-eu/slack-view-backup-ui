import { getJsonFromDataFile } from '$lib/utils/file';
import type { ChannelRoot } from '$lib/types/types';
import type { PageServerLoad } from './$types';


export const load = (async ({ params  }) => {
  const { id } = params
  const [channels, users, team] = await Promise.all([getJsonFromDataFile('channels.json'), getJsonFromDataFile('users.json'), getJsonFromDataFile('team.json')])

  const channel = await getJsonFromDataFile(`conversations_${id}.json`) as ChannelRoot

  return {
   data : {
    channel,
    channels,
    users,
    team,
    channel_id: id
   }
  };
}) satisfies PageServerLoad