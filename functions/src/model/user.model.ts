import { dataBase } from "../database/database";
import { db } from "../database/db-setting";
import { formatTool } from "../tool/format-tool";
import { UserInfo, UserInfoInstance } from '../view-model/user-view-model';

var jwt = require('jsonwebtoken');

export class UserModel {

    constructor() { }

    public getAllAccounts(req: any) {
        // let dbRoute = formatTool.removeFirstSlash(req.url)
        const dbRoute = 'users'
        const reference = db.collection(dbRoute).doc('user');
        let formatResultFn = (result: any) => {
            result = result.users; return result
        }
        const asyncData = dataBase.get({ reference: reference }, formatResultFn);
        return asyncData;
    }

    public createAccount(req: any) {
        // let dbRoute = formatTool.removeFirstSlash(req.url)
        const dbRoute = 'users'
        const reference = db.collection(dbRoute)
        const asyncData = dataBase.put({ reference: reference });
        return asyncData;
    }

    public login(req: any) {
        const account = req.body.account;
        const password = req.body.password;
        const user = new UserInfoInstance({ account, password })
        const dbRoute = 'users'
        const reference = db.collection(dbRoute).doc('user');
        const asyncData = dataBase.get({ reference: reference }, this.verify(user));
        return asyncData;
    }

    /**身分比對 */
    private verify(userinfo: UserInfo) {
        let formatResultFn = (result: any) => {
            result = result.users;
            const user = result.find((data: UserInfo) => data.account === userinfo.account && data.password === userinfo.password)
            if (user) {
                const ciphertext = formatTool.encrypt(user.password, 'password')
                const payload = JSON.parse(JSON.stringify(new UserInfoInstance(user)));
                const token = jwt.sign(payload, 'shhhhh');
                return { encrypt: ciphertext, token: token, }
            }
            return formatTool.unauthorized();
        }
        return formatResultFn;
    }
}

export const userModel = new UserModel();

