import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types';
import { getSha256 } from '$lib/utils/misc';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async (req) => {
    try {
    const hash = req.cookies.get('hash')

    if(hash){
        const configHash = getSha256(env.PASSWORD + env.SALT);
            if(hash === configHash) {
                throw 'redirect'
            }
        }
        return {}
    } catch (e) {
        console.log(e)
        if(e === 'redirect') {
            redirect(302, '/');
        }
        return {}
    }
}
