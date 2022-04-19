import Link from 'next/link';

import style from './style.module.scss';

function Button({ link, children, mode }) {
    return (
        <Link href={link} passHref>
            <a className={style[mode]}>
                { children }
            </a>
        </Link>
    )
}

export { Button };