import Primary from '../../../Buttons/Primary/Primary';
import style from './next.module.scss';
import IButton from '../classes/IButton';

function Next(prop: {step: number, setStep: Function, className?: string}) {
  const next = new IButton(prop.step, prop.setStep);
  
  return (
    <div className={`${style.button} ${prop.className}`}>
        <Primary onClick={() => next.nextStep()} className={style.primary} component={<img src='/arrow_button.png' alt='arrow'/>}>Вперёд</Primary>
    </div>
  )
}

export default Next;