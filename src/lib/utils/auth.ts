import { env } from '$env/dynamic/private';
import { getSha256 } from './misc';


export const checkAuth = async (req: {
    cookies: {
        get: (arg0: string) => any;
    };
}) => {
    if(env.IS_PASSWORD_PROTECTED !== 'true') {
        return {
            hash: null
        }
    }

    const hash = req.cookies.get('hash')
    if(!hash) {
        throw 'denied'
    }
    const configHash = await getSha256(env.PASSWORD + env.SALT);

    if(hash !== configHash) {
        throw 'denied'
    }
    return {
        hash
    }
}