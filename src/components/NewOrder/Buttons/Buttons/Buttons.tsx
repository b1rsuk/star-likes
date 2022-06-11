import style from './buttons.module.scss';
import Payment from './Payment/Payment';
import Move from './Move/Move';

function Buttons(prop: {step: number, setStep: Function}) {
  return (
    <footer className={style.buttons}>
      <Payment />
      <Move step={prop.step} setStep={prop.setStep} />
    </footer>
  );
}

export default Buttons;