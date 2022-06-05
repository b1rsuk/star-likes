import style from './navbar.module.scss';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import User from './classes/User/User';

function NavBar() {
  const user = new User('borsuk', '/users/borsuk/borsuk.jpg', 0, 1);
  return (
    <nav className={style.navbar}>
        <div className={style.container}>
            <Logo />
            <Menu user={user}/>
        </div>
    </nav>
  )
}

export default NavBar