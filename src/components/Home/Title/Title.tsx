import style from './title.module.scss';

function Title(prop: {title: string, component: Function}) {
  return (
    <section className={style.title}>
        <h2>{prop.title}</h2>
        {<prop.component/>}
    </section>
  )
}

export default Title