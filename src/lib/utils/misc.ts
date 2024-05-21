import crypto from 'crypto';

export const getSha256 = (password: string): string => {
    return crypto.createHash('sha256').update(password).digest('base64')
}


export const setCookie = (cname: string, cvalue: string, exdays: number) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

export const eraseCookie = (cname: string) => {   
    document.cookie = cname+'=; Max-Age=0;path=/';  
}