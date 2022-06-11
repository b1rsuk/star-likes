import { MouseEventHandler } from "react";
import style from './secondary.module.scss';

function Secondary(prop: {children: string, className: string, onClick: MouseEventHandler}) {
  return (
    <button onClick={prop.onClick} className={`${style.secondary} ${prop.className}`}>{prop.children}</button>
  );
}

export default Secondary;