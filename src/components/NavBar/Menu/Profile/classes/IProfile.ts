import IDropDown from "../../../DropDown/classes/IDropDown";

class IProfile extends IDropDown {    
    get arrowMode() {
        return {
            transform: this._visibleDropDown? 'rotate(-180deg)' : ''
        }
    }
}

export default IProfile;