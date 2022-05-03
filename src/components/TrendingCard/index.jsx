import { useContext, useState } from 'react';
import ReactItemsCarousel from 'react-items-carousel';

import style from './style.module.scss';
import db from '../../../data.json';
import { ThemeContext } from '../../contexts/ThemeContext';

function Card({name, desc}) {
    return (
        <div className={style.card}>
            <h3>{ name }</h3>
            <p>{ desc }</p>
        </div>
    )
}

function TrendingCard({ single = false }) {
    const { theme } = useContext(ThemeContext);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    let arrowRight = null;
    let arrows = false;
    let items = 2

    console.log(theme)

    if(single) {
        arrowRight = <button className={`${style.arrows} ${style[theme]}`}>{'>'}</button>;
        arrows = true;
        items = 1;
    }

    const projects = db.projects.filter((project) => (
        project.latest === true ?? project
    ))

    return (
        <div className={style.containerTrending}>
            <ReactItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={items}
                gutter={20}
                leftChevron={<button className={`${style.arrows} ${style[theme]}`}>{'<'}</button>}
                rightChevron={arrowRight}
                alwaysShowChevrons = {arrows}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                {
                    projects.map(props =>(
                            <Card key={props.name} {...props} />
                    ))
                }
            </ReactItemsCarousel>
        </div>

    )
}

export { TrendingCard };