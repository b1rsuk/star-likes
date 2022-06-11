import style from './input.module.scss'
import Box from "../Setting/Box/Box";
import { useRef } from 'react';

function Input(prop: {svg: string, placeholder: string}) {
    const input = useRef<any>(null);
    return (
        <Box onClick={() => input.current.focus()}>
            <div className={style.container}>
                <img src={prop.svg} alt="link" className={style.img} />
                <input ref={input} placeholder={prop.placeholder} type="text" className={style.input}/>
            </div>
        </Box>
    );
}

export default Input;