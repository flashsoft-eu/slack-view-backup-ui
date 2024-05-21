import type { RequestHandler } from  './$types';
import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { getSha256 } from '$lib/utils/misc';

export const POST: RequestHandler = (async ({ request }) => {
    try {
  const {
      password,
  } = await request.json()

    if(!password) {
        return json({error: 'Missing password'}, {status: 400})
    }
    
    const providedHash = await getSha256(password + env.SALT);
   
    const configHash = await getSha256(env.PASSWORD + env.SALT);

    if(providedHash !== configHash) {
        return json({error: 'Wrong password'}, {status: 401})
    }
    
    return json({data: 'ok', hash:configHash})

    } catch (e) {
      console.log(e)
      return json({error: 'Internal Server Error'}, {status: 500})
    }
}) satisfies RequestHandler;