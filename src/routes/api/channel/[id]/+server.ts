import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getMessages } from '$lib/utils/sqlite'

 
export const GET: RequestHandler = async ({ params }) => {
  try {
    const { id } = params
    
    return json({ data: getMessages(id) }, { status: 200})

    } catch (e) {
      return json({error: true, message: 'Data file missing'}, {status: 500})
    }
 
}
