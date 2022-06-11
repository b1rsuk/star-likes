import style from './menu.module.scss';
import Balance from './Balance/Balance';
import IMenu from './classes/IMenu';
import IUser from '../../NavBar/classes/User/IUser';
import Chapter from './Chapter/Chapter';
import Pencil from '../../SVG/Pencil/Pencil';
import Notification from './Notification/Notification';
import Exit from '../../SVG/Exit/Exit';
import IBurger from './classes/IBurger';

function Menu(prop: { user: IUser, burger: IBurger }) {
  const menu = new IMenu('white');

  return (
    <div className={style.menu}>
      <Balance menu={menu} user={prop.user} burger={prop.burger}/>
      <Chapter svg={<Pencil svgColor={menu.color}/>} title='Изменить профиль' burger={prop.burger}/>
      <Notification menu={menu} user={prop.user} burger={prop.burger}/>
      <Chapter svg={<Exit svgColor={menu.color}/>} title='Выход' burger={prop.burger}/>
    </div>
  );
}

export default Menu;