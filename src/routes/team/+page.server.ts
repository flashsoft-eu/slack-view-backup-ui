import type { Team, LoadData } from '$lib/types/types';
import type { PageServerLoad } from './$types';


export const load = (async ({ parent  }) => {
  const { channels, users, team} =  (await parent()).data

  return {
   data : {
    is_thread: true,
    channels,
    users,
    team: team as Team
    
   } as LoadData
  };
}) satisfies PageServerLoad