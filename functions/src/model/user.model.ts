import { dataBase } from "../database/database";
import { db } from "../database/db-setting";
import { formatTool } from "../tool/format-tool";

var jwt = require('jsonwebtoken');


export class UserModel {

    constructor() { }

    public getAllAccounts(req: any) {
        // let dbRoute = formatTool.removeFirstSlash(req.url)
        const dbRoute = 'user'
        const reference = db.collection(dbRoute)
        const asyncData = dataBase.get({ reference: reference });
        return asyncData;
    }

    public createAccount(req: any) {
        // let dbRoute = formatTool.removeFirstSlash(req.url)
        const dbRoute = 'user'
        const reference = db.collection(dbRoute)
        const asyncData = dataBase.put({ reference: reference });
        return asyncData;
    }


    public login(req: any) {
        const ciphertext = formatTool.encrypt('a123456', 'password')
        const deeee = formatTool.decrypt(ciphertext, 'password')
        const payload = {
            user_id: 'user11',
            user_name: 'user1',
            user_email: 'user1@gmail.com'
        }
        const token = jwt.sign(payload, 'shhhhh');
        return Promise.resolve({ encrypt: ciphertext, decrypt: deeee, token: token })
        // const dbRoute = 'user'
        // const reference = db.collection(dbRoute)
        // const asyncData = dataBase.get({ reference: reference });
        // return asyncData;
    }



}

export const userModel = new UserModel();

