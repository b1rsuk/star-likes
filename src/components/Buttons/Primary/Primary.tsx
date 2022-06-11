import { MouseEventHandler } from 'react';
import style from './primary.module.scss';

function Primary(prop: {children: string, className: string, component: JSX.Element, onClick: MouseEventHandler}) {
    return (
        <button onClick={prop.onClick} className={`${style.primary} ${prop.className}`}>{prop.children} {prop.component}</button>
    );
}

export default Primary;