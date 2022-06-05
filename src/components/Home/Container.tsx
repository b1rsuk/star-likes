import style from './container.module.scss';
import SideBar from '../SideBar/SideBar';
import SocialNetwork from '../SocialNetwork/SocialNetwork';

function Container() {
  return (
    <section className={style.container}>
      <div className={style.window}>
        <SideBar />
        <div className={style.panel}>
          <SocialNetwork />
        </div>
      </div>
    </section>
  );
}

export default Container;