import { dataBase } from "../database/database";
import { db } from "../database/db-setting";
import { ItemsByCompanyReq } from "../view-model/setting-view-model";

export class SettingModel {

    constructor() { }

    /**
     * 取得所有項目設定
     * @param req 
     */
    public getItemSetting(req) {
        let reference = db.collection('items').doc('item');
        let formatResultFn = (result) => { return result = result.items }
        let asyncData = dataBase.get({ reference: reference }, formatResultFn);
        return asyncData;
    }

    /**
     * 儲存所有項目設定
     * @param req 
     */
    public setItemSetting(req) {
        let reference = db.collection('items').doc('item');
        let asyncData = dataBase.put({ reference: reference, setParams: req.body });
        return asyncData;
    }

    /**
     * 取得所有公司設定
     * @param req 
     */
    public getCompanySetting(req) {
        let reference = db.collection('companies').doc('company');
        let formatResultFn = (result) => { return result = result.companies }
        let asyncData = dataBase.get({ reference: reference }, formatResultFn);
        return asyncData;
    }

    /**
     * 儲存所有公司設定
     * @param req 
     */
    public setCompanySetting(req) {
        let reference = db.collection('companies').doc('company');
        let asyncData = dataBase.put({ reference: reference, setParams: req.body });
        return asyncData;
    }

    /**
     * 取得公司的項目設定
     * @param req 
     */
    public getItemsByCompanySetting(req) {
        let reqParam: ItemsByCompanyReq = { id: req.query.id }
        let reference = db.collection('itemsByCompany').doc(reqParam.id)
        let formatResultFn = (result) => { return result = result && result.items ? result.items : [] }
        let asyncData = dataBase.get({ reference: reference }, formatResultFn);
        return asyncData;
    }

    /**
     * 儲存公司的項目設定
     * @param req 
     */
    public setItemsByCompanySetting(req) {
        let reqParam: ItemsByCompanyReq = req.body
        let reference = db.collection('itemsByCompany').doc(reqParam.id)
        let asyncData = dataBase.put({ reference: reference, setParams: reqParam });
        return asyncData;
    }

    /**
     * 取得所有選單
     * @param req 
     */
    public getMenus(req) {
        let reference = db.collection('menus').doc('menu');
        let formatResultFn = (result) => { return result = result.menus }
        let asyncData = dataBase.get({ reference: reference }, formatResultFn);
        return asyncData;
    }
}

export const settingModel = new SettingModel();