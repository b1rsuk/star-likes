import style from './popup.module.scss';
import IPopup from './classes/IPopup';
import { MouseEventHandler } from 'react';

function Popup(prop: {children?: JSX.Element | JSX.Element[], visible: boolean, close: Function}) {
  const popup = new IPopup(prop.visible);

  return (
    <section onClick={() => prop.close()} className={style.popup} style={popup.visible}>
      {prop.children}
    </section>
  );
}

export default Popup;