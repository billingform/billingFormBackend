import { Request, Response } from "express";
import { settingModel } from "../model/setting.model";
import { ItemsSetting, CompanySetting, Menu } from "../view-model/setting-view-model";


export class SettingController {

    /**
     * 取得所有項目設定
     * @param req 
     * @param res 
     */
    getItemSetting(req: Request, res: Response) {
        const result = settingModel.getItemSetting(req)
        result.then((response: ItemsSetting[]) => res.send(response))
    }

    /**
     * 儲存所有項目設定
     * @param req 
     * @param res 
     */
    setItemSetting(req: Request, res: Response) {
        const result = settingModel.setItemSetting(req);
        result.then((response: any) => res.send(response))
    }


    /**
     * 取得所有公司設定
     * @param req 
     * @param res 
     */
    getCompanySetting(req: Request, res: Response) {
        const result = settingModel.getCompanySetting(req)
        result.then((response: CompanySetting[]) => res.send(response))
    }

    /**
     * 儲存所有公司設定
     * @param req 
     * @param res 
     */
    setCompanySetting(req: Request, res: Response) {
        const result = settingModel.setCompanySetting(req)
        result.then((response: any) => res.send(response))
    }

    /**
     * 取得公司的項目設定
     * @param req 
     * @param res 
     */
    getItemsByCompanySetting(req: Request, res: Response) {
        const result = settingModel.getItemsByCompanySetting(req)
        result.then((response: ItemsSetting[]) => res.send(response))
    }

    /**
     * 儲存公司的項目設定
     * @param req 
     * @param res 
     */
    setItemsByCompanySetting(req: Request, res: Response) {
        const result = settingModel.setItemsByCompanySetting(req)
        result.then((response: any) => res.send(response))
    }

    /**
 * 取得所有選單
 * @param req 
 * @param res 
 */
    getMenus(req: Request, res: Response) {
        const result = settingModel.getMenus(req)
        result.then((response: Menu[]) => res.send(response))
    }

    /**
    * 設定所有選單
    * @param req 
    * @param res 
    */
    setMenus(req: Request, res: Response) {
        const result = settingModel.setMenus(req)
        result.then((response: any) => res.send(response))
    }
}



export default SettingController;