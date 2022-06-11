import style from './step.module.scss';

function Step(prop: { step: number }) {
  return (
    <h3 className={style.step}>Шаг {prop.step + 1}/3</h3>
  )
}

export default Step