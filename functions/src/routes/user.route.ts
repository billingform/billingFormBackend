import Route from "./route";
import UserController from "../controllers/user-controller";

class UserRoute extends Route {
    private userController = new UserController();

    constructor() {
        super();
        this.prefix = '';
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get('/getAllAccounts', this.userController.getAllAccounts);
        this.router.put('/createAccount', this.userController.createAccount);
        this.router.get('/login', this.userController.login);
    }
}

export default UserRoute;