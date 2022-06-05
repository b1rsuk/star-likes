import style from './language.module.scss';

function Language() {
  return (
    <section className={style.dropdown}>
      <div className={style.language}>
        <img src="/ru.svg" alt="RU" />
        <h4>RU</h4>
      </div>
    </section>
  )
}

export default Language