import User from '../../classes/User/User';
import style from './balance.module.scss';
import Plus from '../../../SVG/Plus/Plus';

function Balance(prop: {user: User}) {
  return (
      <section className={style.balance}>
        <h4>Баланс: <span>{prop.user.balance}₽</span></h4>
        <Plus svgColor='white'/>
      </section>
  )
}

export default Balance