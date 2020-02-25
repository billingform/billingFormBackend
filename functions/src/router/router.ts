import Route from "../routes/route";
import UserRoute from "../routes/user.route";
import SettingRoute from "../routes/setting.route";


export const router: Array<Route> = [
    new UserRoute(),
    new SettingRoute()
]