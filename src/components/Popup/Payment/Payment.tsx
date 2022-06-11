import style from './payment.module.scss';
import Popup from '../Popup/Popup';
import NavBar from '../Popup/NavBar/NavBar';
import Pink from '../../Buttons/Pink/Pink';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { setVisiblePayment } from '../../../app/features/popup/popupSlice';
import IPayment from './classes/IPayment';

function Payment() {
  const dispatch = useDispatch();
  const visible = useSelector((state: RootState) => state.popup.visiblePayment);
  const payment = new IPayment(() => dispatch(setVisiblePayment()));

  return (
    <Popup visible={visible} close={() => payment.close()}>
      <div onClick={event => event.stopPropagation()} className={style.payment}>
        <NavBar title='Оплата прошла успешна!' close={() => payment.close()}/>
        <Pink className={style.button} onClick={() => payment.order()}>Перейти в мои заказы</Pink>
      </div>
    </Popup>
  )
}

export default Payment