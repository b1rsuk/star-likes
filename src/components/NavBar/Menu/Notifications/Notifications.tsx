import style from './notifications.module.scss';
import User from '../../classes/User/User';
import DropDown from '../../DropDown/DropDown';
import IDropDown from '../../DropDown/classes/IDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { setVisibleDropDownNotifications } from '../../../../app/features/dropdown/dropdownSlice';

function Notifications(prop: {user: User}) {
  const visibleDropDown = useSelector((state: RootState) => state.dropdown.visibleNotifications);
  const dispatch = useDispatch();
  const dropdown = new IDropDown(visibleDropDown, () => dispatch(setVisibleDropDownNotifications()), [{value: 'Уведомление от Сани', click: () => alert('(Функция)')}]);

  return (
    <section className={style.dropdown}>
      <div className={style.notifications} onClick={() => dropdown.dropDown()}>
          <img src="/notifications.svg" alt="notifications"/>
          <div className={style.circle}>
              <h6>{prop.user.notifications}</h6>
          </div>
      </div>
      <DropDown dropdown={dropdown}/>
    </section>
  )
}

export default Notifications