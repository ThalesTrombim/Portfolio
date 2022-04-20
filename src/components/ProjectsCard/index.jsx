import Image from 'next/image';

import style from './style.module.scss';

function ProjectCard({ projectInfo }) {
    const { name, feats, link  } = projectInfo;

    return (
        <div className={style.cardContainer}>
            <header>
                <Image src={'/icons/fire.png'} width={22} height={23} />
                <p>{name}</p>
            </header>

            <Image 
                src={projectInfo.img} width={311} height={203}
                style={{borderRadius: '12px 12px 0 0'}}
            />
            <div className={style.listFeat}>
                <span>O que essa aplicação faz?</span>

                <ul>
                    { feats.map(feat => (
                        <li key={feat.name}>{feat.name}</li>
                    ))}
                </ul>
            </div>
            <a className={style.visitLink} href={link} target='_blank'>
                Visitar
            </a>
        </div>
    )
}

export { ProjectCard };