class IPayment {
    private _close: Function = Function;

    constructor(close: Function) {
        this._close = close;
    }

    public close() {
        this._close();
    }

    public order() {
        alert('В разработке')
        this._close();
    }
}

export default IPayment;