import CryptoJS from 'crypto-js'

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY_CODE

export const Encrypt = (code) => {
    return CryptoJS.AES.encrypt(JSON.stringify(code), secretKey).toString();
}

export const Decrypt = (code) => {
    const bytes1 = CryptoJS.AES.decrypt(code, secretKey);
    const originalText = bytes1.toString(CryptoJS.enc.Utf8);
    return JSON.parse(originalText)
}

export default {
    Encrypt,
    Decrypt,
}
