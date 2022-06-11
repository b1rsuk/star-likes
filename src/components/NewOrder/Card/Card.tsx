import style from './card.module.scss';
import ICard from './classes/ICard';
import { IMenu } from './classes/ICard';
import Next from '../Buttons/Next/Next';
import { Fragment } from 'react';

function Card(prop: {activeCard: string, setActiveCard: Function, step: number, setStep: Function}) {
    const card = new ICard('var(--darkRGB)', prop.activeCard);
    return (
        <Fragment>
            <section className={style.card}>
                {
                card.menu.map((menu: IMenu, index: number) =>
                    <section key={index} style={card.active(menu.title)} className={style.social} onClick={() => prop.setActiveCard(menu.title)}>
                        <div className={style.content}>
                            <menu.component svgColor={prop.activeCard === menu.title? 'white' : menu.color}/>
                            <h4 style={card.title(menu.title)}>{menu.title}</h4>
                        </div>
                    </section>
                )
                }    
            </section>
            <Next step={prop.step} setStep={prop.setStep} className={style.button}/>
        </Fragment>
    );
}

export default Card;