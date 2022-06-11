import style from './notification.module.scss';
import IMenu from '../classes/IMenu';
import IUser from '../../../NavBar/classes/User/IUser';
import Svg from '../../../SVG/Notification/Notification';
import IBurger from '../classes/IBurger';

function Notification(prop: {menu: IMenu, user: IUser, burger: IBurger}) {
  return (
    <div onClick={() => prop.burger.close()} className={style.container}>
      <div className={style.box}>
        <div className={style.notification}>
          <Svg svgColor={prop.menu.color}/>
          <h5>Уведомления</h5>
        </div>
        <div className={style.circle}>
          <h3>{prop.user.notifications}</h3>
        </div>
      </div>
    </div>
  );
}

export default Notification;