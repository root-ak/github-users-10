import {
    makeAutoObservable,
    runInAction,
} from "mobx";

export interface UserDetailsData {
    avatarUrl: string;
    login: string;
    name: string;
    email: string;
}

interface ApiUserDetails {
    avatar_url: string;
    login: string;
    name: string;
    email: string;
}

export class UserDetails {
    loading = false;
    data: UserDetailsData = {
        avatarUrl: '',
        login: '',
        name: '',
        email: '',
    };

    constructor() {
        makeAutoObservable(this);
    }

    load = async (userId: number) => {
        this.loading = true;
        let response = await fetch(`https://api.github.com/user/${userId}`);
        if (response.status >= 200 && response.status < 300) {
            let apiData: ApiUserDetails = await response.json();
            runInAction(() => {
                this.data = {
                    avatarUrl: apiData.avatar_url,
                    login: apiData.login,
                    name: apiData.name,
                    email: apiData.email,
                };
                this.loading = false;
            });
        }
        else {
            alert((await response.json()).message);
        }
    }
}
