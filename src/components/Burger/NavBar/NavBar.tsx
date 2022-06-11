import style from './navBar.module.scss';

function NavBar(prop: {close: Function}) {
  return (
    <nav onClick={() => prop.close()} className={style.navBar}>
        <div className={style.logo}>
        <h3>STAR<br/>LIKES</h3>
            <img src="/logo.svg" alt="logo" />
        </div>
        <img src="/close.svg" alt="close" />
    </nav>
  );
}

export default NavBar