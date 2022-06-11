import style from './container.module.scss';
import SideBar from '../SideBar/SideBar';
import NewOrder from '../NewOrder/NewOrder';
import { Fragment } from 'react';

function Container() {
  return (
    <Fragment>
      <section className={style.container}>
        <div className={style.window}>
          <SideBar />
          <div className={style.panel}>
            <NewOrder />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Container;