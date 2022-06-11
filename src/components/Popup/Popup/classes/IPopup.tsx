interface IVisible {
    opacity: number;
    pointerEvents: 'auto' | 'none';
}

class IPopup {
    private _visible: boolean = false;

    constructor (visible: boolean) {
        this._visible = visible;
    }

    get visible(): IVisible {
        return {
            opacity: this._visible? 1 : 0,
            pointerEvents: this._visible? 'auto' : 'none'
        }
    }
}

export default IPopup;