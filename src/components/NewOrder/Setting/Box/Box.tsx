import { MouseEventHandler } from 'react';
import style from './box.module.scss';

function Box(prop: {children?: JSX.Element[] | JSX.Element, className?: string, onClick?: MouseEventHandler}) {
  return (
    <div onClick={prop.onClick} className={`${style.box} ${prop.className}`}>{prop.children}</div>
  );
}

export default Box;