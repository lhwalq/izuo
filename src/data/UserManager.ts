import ApiResponse from "@/data/ApiResponse";

// export interface Subscription {
//     status: string;
//     type: string;
//     startDate: string;
//     endDate: string;
//     wordLimit: number;
//     wordsRemaining: number;
// }
//
// export interface User {
//     userId: string;
//     name?: string;
//     image?: string;
//     email?: string;
//     subscription?: Subscription;
// }

class UserManager {

    private static instance: UserManager;
    public userData: any = null;

    private constructor() {
        // this.userData = this.loadUserData();
    }

    public static getInstance(): UserManager {
        if (!UserManager.instance) {
            UserManager.instance = new UserManager();
        }
        return UserManager.instance;
    }

    private loadUserData(): any {
        const newUserData = localStorage.getItem(ApiResponse.USER_DATA);
        if (newUserData) {
            try {
                this.userData =  JSON.parse(newUserData);
                return this.userData;
            } catch (error) {
                return null;
            }
        }
        return null;
    }

    public getUser(): any {
        if (!this.userData) {
            this.loadUserData();
        }
        return this.userData;
    }

    public saveUser(data: any): void {
        this.userData = data;
        localStorage.setItem(ApiResponse.USER_DATA, JSON.stringify(data));
    }

    public removeUser(): void {
        this.userData = null;
        localStorage.removeItem(ApiResponse.USER_DATA);
    }
}

export const userManager = UserManager.getInstance();