import { Fragment } from "react";
import Title from "../../Title/Title";
import Input from "../../Input/Input";
import style from './link.module.scss';

function Link() {
  return (
    <Fragment>
        <Title>Ссылка</Title>
        <div className={style.container}>
          <Input svg={'/link.svg'} placeholder={"Введите ссылку аккаунта"} />
        </div>
    </Fragment>
  );
}

export default Link;