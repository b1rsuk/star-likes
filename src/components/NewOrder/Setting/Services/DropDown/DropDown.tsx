import IDropDown from './classes/IDropDown';
import style from './dropdown.module.scss';
import { useDispatch } from 'react-redux';
import { setVisibleDropDownSetting } from '../../../../../app/features/dropdown/dropdownSlice';
import IMenu from './classes/IMenu';

function DropDown(prop: {menu: string[], setMenu: Function, dropdown: IDropDown}) {
    const dispatch = useDispatch();
    const dropdown = new IMenu(prop.setMenu, () => dispatch(setVisibleDropDownSetting()));

    return (
        <div className={style.dropdown} style={prop.dropdown.visible}>
            {
                prop.menu.map((menu: string) => <div onClick={() => dropdown.choice(menu)} className={style.menu}>{menu}</div>)
            }
        </div>
    );
}

export default DropDown;