interface SvgColor {
    fill: string;
}

interface Shadow {
    filter?: string;
}

class ISvg {
    protected _svgColor: string = '';

    constructor (plusColor: string) {
        this._svgColor = plusColor;
    }

    get svgColor(): SvgColor {
        return {
            fill: `${this._svgColor}`
        }
    }

    public shadow(): Shadow {
        if (this._svgColor === 'white') return {
            filter: 'drop-shadow(0px 0px 23px var(--shadow_0f)) drop-shadow(0px 0px 23px var(--shadow_0f))'
        }
        return {}
    }
}

export default ISvg;