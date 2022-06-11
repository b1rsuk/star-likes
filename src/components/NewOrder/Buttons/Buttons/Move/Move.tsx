import style from './move.module.scss';
import Next from '../../Next/Next';
import IButton from '../../classes/IButton';
import Payment from '../../../Buttons/Payment/Payment';

function Move(prop: {step: number, setStep: Function}) {
  const back = new IButton(prop.step, prop.setStep);
  return (
    <div className={style.move}>
        <div onClick={() => back.backStep()} className={style.back}>
          <img src="/back.svg" alt="back" />
          <h4>К {prop.step} шагу</h4>
        </div>
        {prop.step === 2 ? <Payment /> : <Next step={prop.step} setStep={prop.setStep} />}
    </div>
  );
}

export default Move;