import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoSass, IoLogoGithub } from "react-icons/io";
import { 
    SiJavascript, 
    SiPhp, 
    SiMysql, 
    SiNextdotjs, 
    SiReact, 
    SiTypescript, 
    SiGit,
    SiTailwindcss,
    SiSupabase
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";

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
            <section className={`${style.containerSkills} ${style[theme]}`}>
                <div className={`${style.skillsLeft} ${style[theme]}`}>
                    <Image src={`/images/dev-${theme}.png`} width={218} height={218} />

                    <div 
                        className={`${style.skillsContent} ${style[theme]}`}
                        style={{
                            backgroundImage: `url(/images/bg-skills-${theme}.png)`,
                            backgroundSize: '100%',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <h3>Thales Trombim</h3>
                        <span>Analista e desenvolvedor de software</span>

                        <div className={style.contactIcons}>
                            <a href="https://github.com/ThalesTrombim" target={'_blank'}>
                                <Image src={'/icons/github.png'} width={30} height={30} />
                            </a>
                            <a href="mailto:thalestr@outlook.com" target={'_blank'}>
                                <Image src={'/icons/email.png'} width={40} height={40} />
                            </a>
                            <a href="https://linkedin.com/in/thales-trombim" target={'_blank'}>
                                <Image src={'/icons/linkedin.png'} width={30} height={30} />
                            </a>
                        </div>

                        <div className={style.skillsTech}>
                            <span>SKILLS</span>

                            <div className={style.icons}>
                                <AiFillHtml5 size={35} />
                                <IoLogoCss3 size={35} />
                                <SiJavascript size={30} />
                                <SiPhp size={30} />
                                <SiMysql size={30} />
                                <DiNodejs size={35} style={{marginLeft: '6px'}}/>
                                <SiReact size={30} />
                                <SiNextdotjs size={30} />
                                <SiTypescript size={30} />
                                <SiGit size={30} />
                            </div>
                            <div className={style.iconsOthers}>
                                <span>Outros</span>

                                <div>
                                    <SiTailwindcss size={30}/>
                                    <IoLogoSass size={30}/>
                                    <SiSupabase size={30}/>
                                    <IoLogoGithub size={30}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <Image src={`/images/launch-${theme}.png`} width={500} height={340} />
                </div>
            </section>
        </div>
    )
}

export { Home };