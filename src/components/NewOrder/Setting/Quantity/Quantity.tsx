import { Fragment } from 'react';
import Title from '../../Title/Title';
import style from './quantity.module.scss';
import Input from '../../Input/Input';

function Quantity() {
  return (
    <Fragment>
        <Title>Количество</Title>
        <div className={style.container}>
            <Input svg={'/quantity.svg'} placeholder={"Min: 10 - Max: 15000"} />
        </div>
    </Fragment>
  );
}

export default Quantity;