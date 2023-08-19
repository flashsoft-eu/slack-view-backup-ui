import { getJsonFromDataFile } from '$lib/utils/file';
import type { PageServerLoad } from './$types';


export const load = (async () => {
  const [channels, users] = await Promise.all([getJsonFromDataFile('channels.json'), getJsonFromDataFile('users.json'), getJsonFromDataFile('team.json')])
  return {
   data : {
    channels,
    users,
   }
  };
}) satisfies PageServerLoad