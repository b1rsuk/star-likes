class IUser {
    public name: string = '';
    private avatarURL: string = '';
    public balance: number = 0;
    public notifications: number = 0;

    constructor (name: string, avatarURL: string, balance: number, notifications: number) {
        this.name = name;
        this.avatarURL = avatarURL;
        this.balance = balance;
        this.notifications = notifications;
    }

    get avatar() {
        return {
            backgroundImage: `url('${this.avatarURL}')`
        }
    }
}
export default IUser;