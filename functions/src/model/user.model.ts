import { dataBase } from "../database/database";
import { db } from "../database/db-setting";


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

}

export const userModel = new UserModel();