import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';

import style from './style.module.scss';
import { Button } from '../Button';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navbar () {
    const { theme, handleTheme } = useContext(ThemeContext);
    let widthHeight = 40;
    if(theme === 'light'){
        widthHeight = 30;
    }
    return (
        <div className={`${style.bgContainer} ${style[theme]}`}>
            <header className={style.container}>
                <div className={style.navLeft}>
                    <Link  href={'/'} passHref>
                        <a className={style.logo}>
                            Thales
                        </a>
                    </Link>

                    <Link  href={'/'} passHref>
                        <a className={style.link}>
                            About
                        </a>
                    </Link>

                    <Link  href={'/'} passHref>
                        <a className={style.link}>
                            contact
                        </a>
                    </Link>
                </div>

                <div className={style.navRight}>
                    <div onClick={() => handleTheme()} className={style.toggleImg}>
                        <Image src={`/icons/${theme}.png`} width={widthHeight} height={widthHeight} />
                    </div>
                    <Button link={'/'} mode={'link'}>
                        Contact
                    </Button>
                </div>
            </header>
        </div>
    )
}

export { Navbar };