import { Request, Response } from "express";
import { userModel } from '../model/user.model';

class UserController {

    //取得所有會員
    getAllAccounts(req: Request, res: Response) {
        let result = userModel.getAllAccounts(req)
        result.then(result => res.send(result))
    }

    //新建帳號
    createAccount(req: Request, res: Response) {
        let result = userModel.createAccount(req);
        result.then(result => res.send(result))
    }
}



export default UserController;