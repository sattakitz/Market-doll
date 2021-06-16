export class Users {
    public Id: number;
    public username: string;
    public password: string;

    constructor(Id: number, username: string, password: string) {
        this.Id = Id;
        this.username = username;
        this.password = password;
    }
}
