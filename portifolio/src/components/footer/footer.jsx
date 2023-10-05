import Styles from './footer.module.css'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
export default function Footer(){
    return(
        <>
        <div className={Styles.main}>
            <div className={Styles.container}>
                <div className={Styles.media}>
                
                <a href="https://www.linkedin.com/in/gabriel-de-souza-18928b266/"><FaLinkedin className={Styles.icon} /></a>
                <a href="https://github.com/GabrieldeSouza1"><FaGithubSquare className={Styles.icon} /></a>
                </div>
                <div className={Styles.copy}>
                &copy; Gabriel de Souza 2023
                </div>
                
            </div>
        </div>
        </>
    )
}