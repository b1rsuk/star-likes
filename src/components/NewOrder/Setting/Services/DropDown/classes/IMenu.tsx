class IMenu {
    private setMenu: Function = Function;
    private setVisibleDropDownSetting: Function = Function;

    constructor (setMenu: Function, setVisibleDropDownSetting: Function) {
        this.setMenu = setMenu;
        this.setVisibleDropDownSetting = setVisibleDropDownSetting;
    }

    public choice(menu: string) {
        this.setMenu(menu);
        this.setVisibleDropDownSetting(false);
    }
}

export default IMenu;