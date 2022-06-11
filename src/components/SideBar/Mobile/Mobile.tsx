import style from './mobile.module.scss';
import IMenu from '../classes/IMenu';
import { IList } from '../classes/IMenu';
import { useParams, useNavigate } from 'react-router-dom';

function Mobile() {
    const { id } = useParams();
    const router = useNavigate();
    const menu = new IMenu(router);
    return (
        <footer className={style.mobilebar}>
            <section className={style.menu}>
            {
                menu._menu.map((elem: IList, index: number) => {
                    return (
                        <div key={index} onClick={() => menu.choiceMenu(elem.name)}>
                            <elem.component svgColor={elem.name === id? 'white' : menu.svgColor}/>
                        </div>
                    );
                })
            }
            </section>
        </footer>
    );
}

export default Mobile;