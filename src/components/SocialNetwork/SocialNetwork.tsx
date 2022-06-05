import style from './socialnetwork.module.scss';
import Card from './Card/Card';
import ISocial from './classes/ISocial';
import { ICard }  from './classes/ISocial';
import { Fragment, useState } from 'react';
import Title from '../Home/Title/Title';

function SocialNetwork() {
  const [activeCard, setActiveCard] = useState('Instargram');
  const social = new ISocial();
  return (
    <Fragment>
      <Title title='Выберите социальную сеть' component={function(){return <h5>df</h5>}}/>
      <section className={style.social}>
        {
          social.menu.map((menu: ICard, index: number) =>
          <Card 
            key={index} 
            title={menu.title} 
            component={menu.component} 
            color={menu.color} 
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
          )
        }    
      </section>   
    </Fragment> 
  );
}

export default SocialNetwork;