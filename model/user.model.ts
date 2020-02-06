import { dataBase } from "../database/database";
import { formatTool } from '../tool/format-tool';
import { db } from "../database/db-setting";


export class UserModel {

    constructor() { }

    public getAllAccounts(req) {
        // let dbRoute = formatTool.removeFirstSlash(req.url)
        let dbRoute = 'user'
        let reference = db.collection(dbRoute)
        let asyncData = dataBase.get({ reference: reference });
        return asyncData;
    }

    public createAccount(req) {
        // let dbRoute = formatTool.removeFirstSlash(req.url)
        let dbRoute = 'user'
        let reference = db.collection(dbRoute)
        let asyncData = dataBase.put({ reference: reference });
        return asyncData;
    }

    login(param) {

    }
}

export const userModel = new UserModel();