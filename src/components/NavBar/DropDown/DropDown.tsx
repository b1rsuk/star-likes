import style from './dropdown.module.scss';
import IDropDown from './classes/IDropDown';
import { IMenu } from './classes/IDropDown';

function DropDown(prop: {dropdown: IDropDown}) {
  return (
    <div className={style.dropdown} style={prop.dropdown.visible}>
        <div className={style.menu}>
            {
              prop.dropdown._menu.map((menu: IMenu, index: number) => <h5 key={index} onClick={() => menu.click()}>{menu.value}</h5>)
            }
        </div>
    </div>
  );
}

export default DropDown