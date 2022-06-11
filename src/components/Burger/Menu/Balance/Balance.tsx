import style from './balance.module.scss';
import Money from '../../../SVG/Money/Money';
import IMenu from '../classes/IMenu';
import IUser from '../../../NavBar/classes/User/IUser';
import IBurger from '../classes/IBurger';

function Balance(prop: {menu: IMenu, user: IUser, burger: IBurger}) {
  return (
    <div onClick={() => prop.burger.close()} className={style.container}>
      <div className={style.box}>
        <div className={style.balance}>
          <Money svgColor={prop.menu.color}/>
          <h5>Баланс</h5>
        </div>
        <h3>{prop.user.balance}₽</h3>
      </div>
    </div>
  );
}

export default Balance;