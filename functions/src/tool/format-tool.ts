import { ErrorContent } from "../view-model/error-viewmodel";

var CryptoTS = require("crypto-ts");
export class FormatTool {
    removeFirstSlash = (url: string) => url.replace('/', '')

    encrypt = (message: string, remark: string) => {
        return CryptoTS.AES.encrypt(message, remark).toString();
    }

    decrypt = (encryptText: string, remark: string) => {
        return CryptoTS.AES.decrypt(encryptText, remark).toString(CryptoTS.enc.Utf8);;
    }

    unauthorized = () => { return { message: 'user unauthorized', errorStatus: 401 } as ErrorContent }
}
export const formatTool = new FormatTool();

