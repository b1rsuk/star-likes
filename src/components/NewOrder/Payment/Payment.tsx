import Title from "../Title/Title";
import Input from "../Input/Input";
import style from './payment.module.scss';
import Secondary from "../../Buttons/Secondary/Secondary";
import Buttons from "../Buttons/Buttons/Buttons";

function Payment(prop: {step: number, setStep: Function}) {
  return (
    <section className={style.payment}>
      <Title>Есть промокод?</Title>
      <div className={style.container}>
        <div className={style.input}>
         <Input svg="/promo.svg" placeholder="Введите промокод"/>
        </div>
        <Secondary onClick={() => null} className={style.button}>Хочу промокод!</Secondary>
      </div>
      <Buttons step={prop.step} setStep={prop.setStep}/>
    </section>
  )
}

export default Payment