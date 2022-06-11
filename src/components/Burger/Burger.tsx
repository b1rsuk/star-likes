import IUser from '../NavBar/classes/User/IUser';
import style from './burger.module.scss';
import NavBar from './NavBar/NavBar';
import Profile from './Profile/Profile';
import Menu from './Menu/Menu';
import IBurger from './Menu/classes/IBurger';
import { useSelector, useDispatch } from 'react-redux';
import { setVisibleBurger } from '../../app/features/burger/burgerSlice';
import { RootState } from '../../app/store';

function Burger(prop: { user: IUser }) {
  const visibleBorger = useSelector((state: RootState) => state.burger.visibleBurger);
  const dispatch = useDispatch();
  const burger = new IBurger(visibleBorger, () => dispatch(setVisibleBurger()));

  return (
    <aside style={burger.visible} className={style.burger}>
      <NavBar close={() => burger.close()} />
      <Profile user={prop.user}/>
      <Menu user={prop.user} burger={burger}/>
    </aside>
  );
}

export default Burger;