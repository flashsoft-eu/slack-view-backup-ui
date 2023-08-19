import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getJsonFromDataFile } from '$lib/utils/file'
 
export const GET: RequestHandler = async ({ params }) => {
  try {
    const { channel_id, thread_id } = params
    
    const path = `conversations_${channel_id}_${thread_id}.json`
    
    return json({ data: getJsonFromDataFile(path) }, { status: 200})

    } catch (e) {
      console.log(e)
      return json({error: true, message: 'Data file missing'}, {status: 500})
    }
 
}