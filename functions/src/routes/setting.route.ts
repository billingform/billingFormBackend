import Route from "./route";

import { SettingController } from "../controllers/setting-controller";

class SettingRoute extends Route {
    private settingController = new SettingController();

    constructor() {
        super();
        this.prefix = '';
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get('/getItemSetting', this.settingController.getItemSetting);
        this.router.get('/getCompanySetting', this.settingController.getCompanySetting);
        this.router.get('/getItemsByCompanySetting', this.settingController.getItemsByCompanySetting);
        this.router.get('/getMenus', this.settingController.getMenus);
        this.router.put('/setItemSetting', this.settingController.setItemSetting);
        this.router.put('/setCompanySetting', this.settingController.setCompanySetting);
        this.router.put('/setItemsByCompanySetting', this.settingController.setItemsByCompanySetting);
        this.router.put('/setMenus', this.settingController.setMenus);
    }
}

export default SettingRoute;