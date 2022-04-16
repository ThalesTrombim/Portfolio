import { useContext } from 'react';
import style from './style.module.scss';
import { ThemeContext } from '../../contexts/ThemeContext';

function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <footer className={`${style.containerFooter} ${style[theme]}`}>
            Thales Trombim
        </footer>
    )
}

export { Footer };