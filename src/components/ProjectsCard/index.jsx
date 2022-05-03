import Image from 'next/image';

import style from './style.module.scss';

function ProjectCard({ projectInfo }) {
    const { name, feats, link, techs  } = projectInfo;

    return (
        <div className={style.cardContainer}>
            <header>
                <Image src={'/icons/fire.png'} width={22} height={23} />
                <p>{name}</p>
            </header>

            <a href={link} target={'_blank'}>
                <Image 
                    src={projectInfo.img} width={311} height={203}
                    style={{borderRadius: '12px 12px 0 0'}}
                />
            </a>
            <div className={style.listFeat}>
                <span>O que essa aplicação faz?</span>

                <ul>
                    { feats.map(feat => (
                        <li key={feat.name}>{feat.name}</li>
                    ))}
                </ul>
            </div>

            <div className={style.techContainer}>
                {
                    techs?.map(tech => (
                        <Image key={tech.url} src={tech.url} width={tech.width} height={tech.height} /> 
                    ))
                }
            </div>

            <a className={style.visitLink} href={link} target='_blank'>
                Visitar
            </a>
        </div>
    )
}

export { ProjectCard };