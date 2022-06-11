import { MouseEventHandler } from 'react';
import style from './pink.module.scss';

function Pink(prop: {children: string, className: string, onClick: MouseEventHandler}) {
    return (
        <button onClick={prop.onClick} className={`${style.pink} ${prop.className}`}>{prop.children}</button>
    );
}

export default Pink;