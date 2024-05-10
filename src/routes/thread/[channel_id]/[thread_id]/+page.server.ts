import type { LoadData } from '$lib/types/types';
import type { PageServerLoad } from './$types';
import { getMessages } from '$lib/utils/sqlite'


export const load = (async ({ params, parent  }) => {
  const { channels, users, team} =  (await parent()).data

  const { channel_id, thread_id } = params

  const messages = getMessages(channel_id, thread_id)

  return {
   data : {
    messages,
    channel_id,
    is_thread: true,
    channels,
    users,
    team
    
   } as LoadData
  };
}) satisfies PageServerLoad