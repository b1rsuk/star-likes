import style from './navbar.module.scss';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import IUser from './classes/User/IUser';

function NavBar(prop: { user: IUser }) {
  return (
    <nav className={style.navbar}>
        <div className={style.container}>
            <Logo />
            <Menu user={prop.user}/>
        </div>
    </nav>
  )
}

export default NavBar