import style from './profile.module.scss';
import DropDown from '../../DropDown/DropDown';
import IUser from '../../classes/User/IUser';
import IProfile from './classes/IProfile';
import { setVisibleDropDownProfile } from '../../../../app/features/dropdown/dropdownSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../app/store';
import Avatar from './Avatar/Avatar';

function Profile(prop: {user: IUser}) {
  const visibleDropDown = useSelector((state: RootState) => state.dropdown.visibleProfile);
  const dispatch = useDispatch();
  const profile = new IProfile(visibleDropDown, () => dispatch(setVisibleDropDownProfile()), [{value: 'Выход', click: () => alert('(Функция)')}]);

  return (
    <section className={style.dropdown}>
      <div className={style.profile} onClick={() => profile.dropDown()}>
          <Avatar user={prop.user} />
          <h4>{prop.user.name}</h4>
          <img src="/arrow.svg" alt="arrow" className={style.arrow} style={profile.arrowMode}/>
      </div>
      <DropDown dropdown={profile}/>
    </section>
  );
}

export default Profile