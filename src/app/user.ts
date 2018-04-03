export class User {

    private id: number;
    public getid(): number {
        return this.id;
    }
    public setid(v: number) {
        this.id = v;
    }



    private userName: string;
    public getuserName(): string {
        return this.userName;
    }
    public setuserName(v: string) {
        this.userName = v;
    }


    private password: string;
    public getpassword(): string {
        return this.password;
    }
    public setpassword(v: string) {
        this.password = v;
    }



}
