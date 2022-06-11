interface IVisible {
    opacity: number;
    pointerEvents: 'auto' | 'none';
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
            pointerEvents: this.visibleBurger ? 'auto' : 'none'
        }
    }

    public close() {
        this._close();
    }
}

export default IBurger;