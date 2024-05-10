import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getUsers } from '$lib/utils/sqlite'
 
export const GET: RequestHandler = async () => {
  try {
    
    return json({ data: getUsers() }, { status: 200})

    } catch (e) {
      console.log(e)
      return json({error: true, message: 'Data file missing'}, {status: 500})
    }
 
}
