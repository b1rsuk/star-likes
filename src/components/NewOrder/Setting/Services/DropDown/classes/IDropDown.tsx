interface IVisible {
    opacity: number,
    'pointer-events': string;
} 
interface IArrowMode {
    transform: string;
}

class IDropDown {
    private visibleDropDown: boolean = false;

    constructor (visibleDropDown: boolean) {
        this.visibleDropDown = visibleDropDown;
    }

    get visible(): IVisible {
        return {
            opacity: this.visibleDropDown? 1 : 0,
            'pointer-events': this.visibleDropDown? '' : 'none'
        }
    }

    get arrowMode(): IArrowMode {
        return {
            transform: this.visibleDropDown? 'rotate(0.5turn)' : ''
        }
    }
}

export default IDropDown;