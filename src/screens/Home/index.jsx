import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';

import style from './style.module.scss';

function Home() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`${style.bgContainer} ${style[theme]}`}>
            <main className={`${style.container} ${style[theme]}`}>
                <div className={style.leftArea}>
                    <h1>Thales <br /> Trombim</h1>
                    <span>Web developer</span>

                    <div className={style.buttonArea}>
                        <a className={style.gitHub} href={'https://github.com/ThalesTrombim'}>
                            <img src={`/icons/github-${theme}.png`} alt="" />
                            GitHub
                        </a>
                        <Link href={'/contact'} passHref>
                            <a className={style.buttonContact}>
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
                <div>
                    <Image src={`/images/home-${theme}.png`} width={495.75} height={431}/>
                </div>
            </main>
        </div>
    )
}

export { Home };