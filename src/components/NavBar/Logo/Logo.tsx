import style from './logo.module.scss';

function Logo() {
  return (
    <section className={style.logo}>
        <div className={style.container}>
            <h1 className={style.title}>STAR<br/>LIKES</h1>
            <img src="/logo.svg" alt="start likes" />
        </div>
    </section>
  )
}

export default Logo