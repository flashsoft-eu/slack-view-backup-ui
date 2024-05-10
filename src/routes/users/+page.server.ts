import type { PageServerLoad } from './$types';


export const load = (async ({ parent }) => {
  const { channels, users} =  (await parent()).data
  return {
   data : {
    channels,
    users,
   }
  };
}) satisfies PageServerLoad