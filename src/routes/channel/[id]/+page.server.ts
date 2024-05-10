import type { Message } from '$lib/types/types';
import type { PageServerLoad } from './$types';
import { getMessages } from '$lib/utils/sqlite'


export const load = (async ({ params, parent   }) => {
  const { id } = params
  const { channels, users, team} =  (await parent()).data

  const messages =  getMessages(id) as Message[]

  return {
   data : {
    messages,
    channels,
    users,
    team,
    channel_id: id
   }
  };
}) satisfies PageServerLoad