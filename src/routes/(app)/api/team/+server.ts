import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getTeam } from '$lib/utils/sqlite'
import { checkAuth } from '$lib/utils/auth';


export const GET: RequestHandler = async (req) => {
  try {
    
    try {
      await checkAuth(req)
    } catch (e) {
      return json({error: true, message: 'Unauthorized'}, {status: 401})
    }
    
    return json({ data: getTeam() }, { status: 200})

    } catch (e) {
      console.log(e)
      return json({error: true, message: 'Data file missing'}, {status: 500})
    }
 
}
