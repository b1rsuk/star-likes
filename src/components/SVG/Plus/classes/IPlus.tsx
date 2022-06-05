import ISvg from "../../classes/ISvg";

interface Border {
    border: string;
    filter?: string;
}

class IPlus extends ISvg {
    get borderColor(): Border {
        const borderStyle: Border = {
            border: `1px solid ${this._svgColor}`
        }
        return Object.assign(borderStyle, super.shadow());
    }
}

export default IPlus;