import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import style from './style.module.scss';

function Portfolio() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${style.portfolioContainer} ${style[theme]}`}>
            portfolio
        </div>
    )
}

export { Portfolio };