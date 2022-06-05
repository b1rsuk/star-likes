import style from './card.module.scss';
import ICard from './classes/ICard';

function Card(prop: {title: string, component: Function, color: string, activeCard: string, setActiveCard: Function}) {
    const card = new ICard('var(--darkRGB)', prop.activeCard);
    return (
        <section style={card.active(prop.title)} className={style.social} onClick={() => prop.setActiveCard(prop.title)}>
            <div className={style.content}>
                <prop.component svgColor={prop.activeCard === prop.title? 'white' : prop.color}/>
                <h4 style={card.title(prop.title)}>{prop.title}</h4>
            </div>
        </section>
    );
}

export default Card;