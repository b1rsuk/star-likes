export interface IMenu {
    value: string;
    click: Function;
}

interface IVisible {
    opacity: number;
    'pointer-events': string;
}

class IDropDown {
    private _setVisibleDropDown: Function = Function;
    public _visibleDropDown: boolean = false;
    public _menu: IMenu[] = [];
    
    constructor (visibleDropDown: boolean, setVisibleDropDown: Function, menu: IMenu[]) {
        this._setVisibleDropDown = setVisibleDropDown;
        this._visibleDropDown = visibleDropDown;
        this._menu = menu;
    } 

    public dropDown(): void {
        this._setVisibleDropDown();
    }

    get visible(): IVisible {
        return {
            opacity: this._visibleDropDown? 1 : 0,
            'pointer-events': this._visibleDropDown? '' : 'none',
        }
    };
}

export default IDropDown;