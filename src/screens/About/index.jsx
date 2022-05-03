import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import style from './style.module.scss';

function About() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${style.aboutContainer} ${style[theme]}`}>

            <main>
                <h3>About</h3>

                <p>
                    Me chamo Thales, tenho 24 anos, e sou analista e desenvolvedor de sistemas. Gosto de jogar algum game de vez em quando, assistir algum filme ou série, ou então tocar minha guitarra ou violão, e gosto sempre de sair bem cedinho para uma caminhada. <br /> <br /> Eu sempre me interessei por tecnologia, e foi assim descobri que era com isso que queria trabalhar e me dedicar. Gosto de programar para aprender coisas novas e me atualizar, mas também gosto de programar apenas por diversão, me desafiar e achar soluções para problemas.
                    <br /><br />Tenho focado mais no front-end, aonde comecei e gosto muito de trabalhar, sou apaixonado pelo ecossistema JavasScript, com React, NextJs, NodeJs, React Native e TypeScript também, Mas busco também aprender pelo menos o básico na parte de backend, construindo Apis-Rest com Nodejs, e já trabalhei também com PHP no back. Enfim isso foi um pouco sobre mim, se quiser me conhecer melhor ou trocar uma ideia, pode  ir na parte de contato que está tudo lá 😉
                </p>
            </main>
        </div>
    )
}

export { About };