import { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { ProjectCard } from '../../components/ProjectsCard';
import style from './style.module.scss';
import data from '../../../data.json';

function Portfolio() {
    const { theme } = useContext(ThemeContext);
    const { projects } = data;

    console.log(projects)

    return (
        <div className={`${style.portfolioContainer} ${style[theme]}`}>
            <h3>Portfolio</h3>

            <main className={`${style.cardsMain} ${style[theme]}`}>
                { projects.map(project => (
                    <ProjectCard
                        key={project.name}
                        projectInfo={project}
                    />
                ))}
            </main>
        </div>
    )
}

export { Portfolio };