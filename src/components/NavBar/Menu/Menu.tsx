import style from './menu.module.scss';
import Profile from './Profile/Profile';
import IUser from '../classes/User/IUser';
import Notifications from './Notifications/Notifications';
import Balance from './Balance/Balance';
import Language from './Language/Language';
import { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { setVisibleBurger } from '../../../app/features/burger/burgerSlice';

function Menu(prop: {user: IUser}) {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className={style.menu}>
          <Profile user={prop.user}/>
          <Notifications user={prop.user}/>
          <Balance user={prop.user}/>
          <Language />
      </div>
      <section className={style.mobileMenu} onClick={() => dispatch( setVisibleBurger() )}>
        <img src="/menu.svg" alt="mobile menu" />
      </section>
    </Fragment>
  );
}

export default Menu;