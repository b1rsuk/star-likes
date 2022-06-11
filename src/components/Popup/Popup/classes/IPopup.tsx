interface IVisible {
    opacity: number;
    'pointer-events': string;
}

class IPopup {
    private _visible: boolean = false;

    constructor (visible: boolean) {
        this._visible = visible;
    }

    get visible(): IVisible {
        return {
            opacity: this._visible? 1 : 0,
            'pointer-events': this._visible? '' : 'none'
        }
    }
}

export default IPopup;