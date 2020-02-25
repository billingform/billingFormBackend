import { Request, Response } from "express";
import { userModel } from '../model/user.model';

class UserController {

    //取得所有會員
    getAllAccounts(req: Request, res: Response) {
        const result = userModel.getAllAccounts(req)
        result.then((response: any) => res.send(response))
    }

    //新建帳號
    createAccount(req: Request, res: Response) {
        const result = userModel.createAccount(req);
        result.then((response: any) => res.send(response))
    }
}



export default UserController;