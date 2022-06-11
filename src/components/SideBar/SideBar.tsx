import style from './sideBar.module.scss';
import IMenu, { IList } from './classes/IMenu';
import { useParams, useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import Mobile from './Mobile/Mobile';

function SideBar() {
  const { id } = useParams();
  const router = useNavigate();
  const menu = new IMenu(router);

  return (
    <Fragment>
      <aside className={style.sidebar}>
        {
          menu._menu.map((elem: IList, index: number) => {
            return (
              <section onClick={() => menu.choiceMenu(elem.name)} className={style.menu} key={index}>
                {<elem.component svgColor={elem.name === id? 'white' : menu.svgColor}/>}
                <h4 style={menu.active(elem.name === id)}>{elem.value}</h4>
              </section>
            )
          })
        }
      </aside>
      <Mobile />
    </Fragment>
  );
}

export default SideBar;
