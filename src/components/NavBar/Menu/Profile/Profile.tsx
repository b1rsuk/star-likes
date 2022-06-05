import style from './profile.module.scss';
import DropDown from '../../DropDown/DropDown';
import User from '../../classes/User/User';
import IProfile from './classes/IProfile';
import { setVisibleDropDownProfile } from '../../../../app/features/dropdown/dropdownSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../app/store';

function Profile(prop: {user: User}) {
  const visibleDropDown = useSelector((state: RootState) => state.dropdown.visibleProfile);
  const dispatch = useDispatch();
  const profile = new IProfile(visibleDropDown, () => dispatch(setVisibleDropDownProfile()), [{value: 'Выход', click: () => alert('(Функция)')}]);

  return (
    <section className={style.dropdown}>
      <div className={style.profile} onClick={() => profile.dropDown()}>
          <div className={style.circle} style={prop.user.avatar}></div>
          <h4>{prop.user.name}</h4>
          <img src="/arrow.svg" alt="arrow" style={profile.arrowMode}/>
      </div>
      <DropDown dropdown={profile}/>
    </section>
  );
}

export default Profile