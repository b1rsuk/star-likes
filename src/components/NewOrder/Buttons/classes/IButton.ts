class IButton {
    private step: number = 0;
    private setStep: Function = Function;

    constructor (step: number, setStep: Function) {
        this.step = step;
        this.setStep = setStep;
    }

    public nextStep() {
        if (this.step === 2) return;
        this.setStep(this.step + 1);
    }

    public backStep() {
        if (this.step === 0) return;
        this.setStep(this.step - 1);
    }
}

export default IButton;