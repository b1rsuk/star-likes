import style from './title.module.scss';

function Title(prop: {children?: string}) {
  return (
    <h3 className={style.title}>{prop.children}</h3>
  );
}

export default Title;