import Image from 'next/image';
import style from './style.module.scss';
import { AiOutlineWhatsApp, AiOutlineMail, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { MobileMenuContext } from '../../contexts/MobileMenuContext';

function Contact() {
    const { theme } = useContext(ThemeContext);
    const { toggleActive } = useContext(MobileMenuContext)

    return (
        <div className={`${style.contactContainer} ${style[theme]}`} onClick={toggleActive}>
            <main>
                <h3>Contact</h3>

                <div className={style.content}>
                    <div className={`${style.contentTop} ${style[theme]}`}></div>

                    <span className={style.imageDev}>
                        <Image src={'/images/contact.png'} width={152} height={152} />
                    </span>

                    <div className={style.contacts}>
                        <span><a href="https://wa.me/5519988314168" target={'_blank'}><AiOutlineWhatsApp color='#000' size={20}/></a>  (19)  98831-4168</span>
                        <span><a href="mailto:thalestr@outlook.com"><AiOutlineMail color='#000' size={20} /></a> thalestr@outlook.com</span>
                        <span><a href="https://www.linkedin.com/in/thalestrombim/" target={'_blank'}><AiFillGithub color='#000' size={20} /></a> ThalesTrombim </span>
                        <span><a href="https://github.com/ThalesTrombim" target={'_blank'}><AiFillLinkedin color='#000' size={20} /></a> thalestrombim </span>
                    </div> 

                    <button>
                        Vamos conversar    
                    </button> 
                </div>
            </main>
        </div>
    )
}

export { Contact };