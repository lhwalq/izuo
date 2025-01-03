// ApiResponse.ts
export default class ApiResponse<T = any> { // 使用泛型T，默认为 any 类型

    static SUCCESS = 1;
    static FAIL = 2;

    static USER_DATA = "userData";

    static BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

    code: number;
    message: string;
    data: T;  // 使用泛型 T 代替 any

    constructor(code: number = ApiResponse.SUCCESS, message: string = "", data: T = {} as T) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    getResponse(): { code: number; message: string; data: T } {
        return {
            code: this.code,
            message: this.message,
            data: this.data,
        };
    }

    static getApiUrl(endpoint: string) {
        return `${ApiResponse.BASE_API_URL}/${endpoint}`;
    }
}
