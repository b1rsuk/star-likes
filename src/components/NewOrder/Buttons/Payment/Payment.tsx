import Primary from '../../../Buttons/Primary/Primary';
import style from '../Next/next.module.scss';
import IPayment from '../classes/IPayment';
import { useDispatch } from 'react-redux';
import { setVisiblePayment } from '../../../../app/features/popup/popupSlice';

function Payment() {
  const dispatch = useDispatch();

  const payment = new IPayment(() => dispatch(setVisiblePayment()));
  
  return (
    <div className={style.button}>
        <Primary onClick={() => payment.payment()} className={style.primary} component={<img src='/arrow_button.png' alt='arrow'/>}>Оплата</Primary>
    </div>
  )
}

export default Payment;