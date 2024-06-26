import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getMessages } from '$lib/utils/sqlite'

export const GET: RequestHandler = async ({ params }) => {
  try {
    const { channel_id, thread_id } = params
    
    
    return json({ data: getMessages(channel_id, thread_id) }, { status: 200})

    } catch (e) {
      console.log(e)
      return json({error: true, message: 'Data file missing'}, {status: 500})
    }
 
}