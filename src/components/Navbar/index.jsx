import Link from 'next/link';
import Image from 'next/image';
import { useContext, useState } from 'react';

import style from './style.module.scss';
import { Button } from '../Button';
import { ThemeContext } from '../../contexts/ThemeContext';
import { MobileMenuContext } from '../../contexts/MobileMenuContext';

function Navbar () {
    const { theme, handleTheme } = useContext(ThemeContext);
    const { mobileMenu, setMobileMenu, toggleActive } = useContext(MobileMenuContext);

    let widthHeight = 40;
    if(theme === 'light'){
        widthHeight = 30;
    }

    return (
        <div className={`${style.bgContainer} ${style[theme]}`}>
            <header className={style.containerDesktop}>
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

                    <Link  href={'/portfolio'} passHref>
                        <a className={style.link}>
                            Portfolio
                        </a>
                    </Link>
                </div>

                <div className={style.navRight}>
                    <div onClick={() => handleTheme()} className={style.toggleImg}>
                        <Image src={`/icons/${theme}.png`} width={widthHeight} height={widthHeight} />
                    </div>
                    <Button link={'/contact'} mode={'link'}>
                        Contact
                    </Button>
                </div>
            </header>
            <header className={style.containerMobile}>
                {
                    !mobileMenu ? (
                        <>
                            <div className={style.navLeft}>
                                <Link  href={'/'} passHref>
                                    <a className={style.logo}>
                                        Thales
                                    </a>
                                </Link>
                            </div>

                            <div className={style.navRight}>
                                <div onClick={() => handleTheme()} className={style.toggleImg}>
                                    <Image src={`/icons/${theme}.png`} width={widthHeight} height={widthHeight} />
                                </div>

                                <div onClick={() => setMobileMenu(true)} className={style.toggleImg}  >
                                    <Image src={`/icons/burguer.png`} width={35} height={35} />
                                </div>
                                {/* <Button link={'/contact'} mode={'link'}>
                                    Contact
                                </Button> */}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={style.navLeft}>
                                <Link  href={'/'} passHref>
                                    <a className={style.logo}>
                                        Thales
                                    </a>
                                </Link>
                            </div>

                            <div className={style.navRight}>
                                <div onClick={() => handleTheme()} className={style.toggleImg}>
                                    <Image src={`/icons/${theme}.png`} width={widthHeight} height={widthHeight} />
                                </div>

                                <div onClick={toggleActive} className={style.toggleImg}  >
                                    <Image src={`/icons/burguer.png`} width={35} height={35} />
                                </div>
                                {/* <Button link={'/contact'} mode={'link'}>
                                    Contact
                                </Button> */}
                            </div>
                            <div className={style.menuMobile} onClick={toggleActive}>
                                {/* <Link  href={'/'} passHref>
                                    <a className={style.logo}>
                                        
                                    </a>
                                </Link> */}

                                <div className={style.menuMobileHeader}>
                                    <div></div>
                                    <span>MENU</span>
                                    <div onClick={toggleActive} className={style.toggleImg} >
                                        <Image src={`/icons/close.png`} width={20} height={20} />
                                    </div>
                                </div>

                                <Link  href={'/'} passHref>
                                    <a className={style.menuMobileLink}>
                                        About
                                    </a>
                                </Link>

                                <Link  href={'/portfolio'} passHref>
                                    <a className={style.menuMobileLink}>
                                        Portfolio
                                    </a>
                                </Link>

                                <Link  href={'/contact'} passHref>
                                    <a className={style.menuMobileLink}>
                                        Contact
                                    </a>
                                </Link>

                                <div className={style.iconsMenuMobile}>
                                    <a href="https://github.com/ThalesTrombim" target={'_blank'}>
                                        <Image src={`/icons/github.png`} width={25} height={25} />
                                    </a>
                                    <a href="mailto:thalestr@outlook.com" target={'_blank'}>
                                        <Image src={`/icons/email.png`} width={30} height={30} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/thales-trombim/" target={'_blank'}>
                                        <Image src={`/icons/linkedin.png`} width={25} height={25} />
                                    </a>
                                </div>
                            </div>
                        </>
                    )
                }
            </header>
        </div>
    )
}

export { Navbar };