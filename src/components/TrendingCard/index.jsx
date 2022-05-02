import { useState } from 'react';
import ReactItemsCarousel from 'react-items-carousel';

import style from './style.module.scss';
import db from '../../../data.json';

function Card({name, desc}) {
    return (
        <div className={style.card}>
            <h3>{ name }</h3>
            <p>{ desc }</p>
        </div>
    )
}

function TrendingCard({ single = false }) {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    let arrowRight = false;
    let arrows = false;
    let items = 2

    if(single) {
        arrowRight = <button className={style.arrows}>{'>'}</button>;
        arrows = true;
        items = 1;
    }

    return (
        <div className={style.containerTrending}>
            <ReactItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={items}
                gutter={20}
                leftChevron={<button className={style.arrows}>{'<'}</button>}
                rightChevron={arrowRight}
                alwaysShowChevrons = {arrows}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                {/* <Card text={'1'}/>
                <Card text={'2'}/>
                <Card text={'3'}/> */}
                {
                    db.projects.map(props =>(
                        <Card {...props} />
                    ))
                }
            </ReactItemsCarousel>
        </div>

    )
}

export { TrendingCard };