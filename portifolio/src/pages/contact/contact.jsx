import Styles from "./contact.module.css"
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
export default function Contact() {
    return (
        <div className={Styles.body}>
            <span className={`flex justify-center align-center ${Styles.email}`}>
                <a href='mailto:gabrieldesouza125@gmail.com' target='_blank' aria-label='Email'>
                    <AiOutlineMail size='1.7rem' fill='#fff' />
                </a>
            </span>
            <span className={`flex justify-center align-center ${Styles.whatsapp}`}>
                <a href='https://api.whatsapp.com/send?phone=5531999390150&text=Ola,%20sou...,%20vi%20seu%20portifolio,%20gostaria%20de%20conversar!' target='_blank' aria-label='WhatsApp'>
                    <BsWhatsapp size='1.7rem' fill='#fff' />
                </a>
            </span>
        </div>
    )
}