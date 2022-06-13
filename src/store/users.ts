import {
    makeAutoObservable,
    runInAction,
} from "mobx";

export interface UserInfo {
    id: number;
    login: string;
}

export class Users {
    loading: boolean = false;
    data: UserInfo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    load = async () => {
        this.loading = true;
        let since = Math.floor(Math.random() * 1_000_000);
        let response = await fetch(`https://api.github.com/users?per_page=10&since=${since}`);
        if (response.status >= 200 && response.status < 300) {
            let users: UserInfo[] = await response.json();
            runInAction(() => {
                this.data = users;
                this.loading = false;
            });
        }
        else {
            alert((await response.json()).message);
        }
    }
}
