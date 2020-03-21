export interface UserInfo {
    account: string;
    password: string;
    email?: string;
}

export class UserInfoInstance implements UserInfo {
    account: string = '';
    password: string = '';
    email: string = '';
    constructor(user: any) {
        this.account = user.account;
        this.password = user.password;
        this.email = user.email;
    }
}