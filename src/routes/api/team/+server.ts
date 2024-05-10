import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getTeam } from '$lib/utils/sqlite'

export const GET: RequestHandler = async () => {
  try {
    const path = `team.json`
    
    return json({ data: getTeam() }, { status: 200})

    } catch (e) {
      console.log(e)
      return json({error: true, message: 'Data file missing'}, {status: 500})
    }
 
}
