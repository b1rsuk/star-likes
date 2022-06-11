import style from './navbar.module.scss';

function NavBar(prop: {title: string, close: Function}) {
  return (
    <nav className={style.navBar}>
        <h3>{prop.title}</h3>
        <img onClick={() => prop.close()} src="/close.svg" alt="close" />
    </nav>
  )
}

export default NavBar