import style from './sideBar.module.scss';
import IMenu, { IList } from './classes/IMenu';
import { useParams, useNavigate } from 'react-router-dom';

function SideBar() {
  const { id } = useParams();
  const router = useNavigate();
  const menu = new IMenu(router);

  return (
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
  )
}

export default SideBar