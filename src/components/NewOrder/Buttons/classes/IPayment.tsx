class IPayment {
    private setVisiblePayment: Function = Function;

    constructor(seVisiblePayment: Function) {
        this.setVisiblePayment = seVisiblePayment;
    }

    public payment() {
        this.setVisiblePayment();
    }
}

export default IPayment;