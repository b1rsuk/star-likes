import style from './payment.module.scss';

function Payment() {
  return (
    <div className={style.payment}>
        <h3>Сумма к оплате</h3>
        <span>0.00₽</span>
    </div>
  );
}

export default Payment;