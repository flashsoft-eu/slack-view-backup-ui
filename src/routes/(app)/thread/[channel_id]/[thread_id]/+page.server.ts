import type { LoadData } from '$lib/types/types';
import type { PageServerLoad } from './$types';
import { getMessages, getThread } from '$lib/utils/sqlite'


export const load = (async ({ params, parent  }) => {
  const { channels, users, team} =  (await parent()).data

  const { channel_id, thread_id } = params

  const root = getMessages(channel_id, thread_id)
  const replies = getThread(channel_id, thread_id)
  const messages = [...root, ...replies]

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