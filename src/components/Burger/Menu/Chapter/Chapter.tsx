import IBurger from '../classes/IBurger';
import style from './chapter.module.scss';

function Chapter(prop: { svg: JSX.Element, title: string, burger: IBurger }) {
  return (
    <div className={style.chapter} onClick={() => prop.burger.close()}>
        {prop.svg}
        <h5>{prop.title}</h5>
    </div>
  );
}

export default Chapter;