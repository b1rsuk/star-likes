import Card from './Card/Card';
import ISocial from './classes/ISocial';
import { Fragment, useState } from 'react';
import Title from '../Home/Title/Title';
import Step from './Step/Step';
import Setting from './Setting/Setting';
import Payment from './Payment/Payment';

function NewOrder() {
  const [activeCard, setActiveCard] = useState('Instargram');
  const [step, setStep] = useState(0);
  const social = new ISocial();
  social.steps = [
    {
      title: 'Выберите социальную сеть', 
      component: <Card activeCard={activeCard} setActiveCard={setActiveCard} step={step} setStep={setStep} />
    },
    {
      title: 'Настройте услугу', 
      component: <Setting step={step} setStep={setStep} />
    },
    {
      title: 'Оплата', 
      component: <Payment step={step} setStep={setStep} />
    },
  ];

  return (
    <Fragment>
      <Title title={social.steps[step].title} component={<Step step={step}/>}/>
      {social.steps[step].component}
    </Fragment> 
  );
}

export default NewOrder;