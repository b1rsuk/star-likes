import style from './title.module.scss';

function Title(prop: {title: string, component: JSX.Element}) {
  return (
    <section className={style.title}>
        <h2>{prop.title}</h2>
        {prop.component}
    </section>
  )
}

export default Title