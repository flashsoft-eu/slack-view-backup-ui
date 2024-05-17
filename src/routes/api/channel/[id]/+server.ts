import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getMessages } from '$lib/utils/sqlite'

 
export const GET: RequestHandler = async ({ params, url }) => {
  try {
    const { id } = params
    const query = new URLSearchParams(url.search)
    const limit = Number(query.get('limit')) || 20
    const offset = Number(query.get('offset')) || 0
    
    return json({ data: getMessages(id, undefined, limit, offset) }, { status: 200 })

    } catch (e) {
      return json({error: true, message: 'Data file missing'}, {status: 500})
    }
 
}
