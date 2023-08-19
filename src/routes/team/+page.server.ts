import { getJsonFromDataFile } from '$lib/utils/file';
import type { TeamApiResponse, LoadData } from '$lib/types/types';
import type { PageServerLoad } from './$types';


export const load = (async () => {
    const [channels, users, team] = await Promise.all([getJsonFromDataFile('channels.json'), getJsonFromDataFile('users.json'), getJsonFromDataFile('team.json')])

  return {
   data : {
    is_thread: true,
    channels,
    users,
    team: team as TeamApiResponse
    
   } as LoadData
  };
}) satisfies PageServerLoad