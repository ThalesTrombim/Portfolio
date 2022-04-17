import Image from 'next/image';
import style from './style.module.scss';
import { AiOutlineWhatsApp, AiOutlineMail, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

function Contact() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${style.contactContainer} ${style[theme]}`}>
            <main>
                <h3>Contact</h3>

                <div className={style.content}>
                    <div className={`${style.contentTop} ${style[theme]}`}></div>

                    <span className={style.imageDev}>
                        <Image src={'/images/contact.png'} width={152} height={152} />
                    </span>

                    <div className={style.contacts}>
                        <span><AiOutlineWhatsApp size={20}/>  (19)  98831-4168</span>
                        <span><AiOutlineMail size={20} />  thalestr@outlook.com</span>
                        <span><AiFillGithub size={20} />  ThalesTrombim</span>
                        <span><AiFillLinkedin size={20} />  ThalesTrombim</span>
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