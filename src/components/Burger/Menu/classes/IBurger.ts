interface IVisible {
    opacity: number;
    'pointer-events': string;
}

class IBurger {
    private visibleBurger: boolean = false;
    private _close: Function = Function;

    constructor(visibleBurger: boolean, close: Function) {
        this.visibleBurger = visibleBurger;
        this._close = close;
    }

    get visible(): IVisible {
        return {
            opacity: this.visibleBurger ? 1 : 0,
            'pointer-events': this.visibleBurger ? '' : 'none'
        }
    }

    public close() {
        this._close();
    }
}

export default IBurger;