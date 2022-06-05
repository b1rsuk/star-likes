import style from './menu.module.scss';
import Profile from './Profile/Profile';
import User from '../classes/User/User';
import Notifications from './Notifications/Notifications';
import Balance from './Balance/Balance';
import Language from './Language/Language';
import { Fragment } from 'react'

function Menu(prop: {user: User}) {
  return (
    <Fragment>
      <div className={style.menu}>
          <Profile user={prop.user}/>
          <Notifications user={prop.user}/>
          <Balance user={prop.user}/>
          <Language />
      </div>
      <section className={style.mobileMenu}>
        <img src="/menu.svg" alt="mobile menu" />
      </section>
    </Fragment>
  )
}

export default Menu