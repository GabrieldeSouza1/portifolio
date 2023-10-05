import React from 'react'
import Styles from './aboutMe.module.css'
import { FaReact, FaNode, FaJava, FaGithubSquare, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiFlutter, SiNextdotjs, SiMongodb, SiDotnet, SiMicrosoftsqlserver } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

export default function AboutMe() {

    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.divSobre}>
                    <h1 className={Styles.h1}>Sobre mim</h1>
                    <p>
                        Olá! Sou Gabriel, um desenvolvedor full stack apaixonado por transformar ideias em código. Minha jornada na engenharia de software me permite explorar todos os aspectos do desenvolvimento de aplicativos, desde a concepção até a entrega.
                        Com um foco inabalável na qualidade e na experiência do usuário, trabalho incansavelmente para criar soluções funcionais e eficazes. Tenho experiência sólida em tecnologias como React, Flutter e .NET, e estou constantemente aprendendo e me atualizando para acompanhar as inovações tecnológicas.
                    </p>
                </div>
                <div className={Styles.teste}>
                    <h1 className={Styles.h1}>Tecnologias</h1>
                    <div className={Styles.divTec}>
                        <div className={Styles.divIcon}>
                            <FaReact className={Styles.tecIcon} />
                            
                            <span>React.js</span>
                        </div>
                        <div className={Styles.divIcon}>
                            <FaNode className={Styles.tecIcon} />
                            <span>Node.js</span>
                        </div>
                        <div className={Styles.divIcon}>
                            <FaJava className={Styles.tecIcon} />
                            <span>Java</span>
                        </div>
                        <div className={Styles.divIcon}>
                            <FaGithubSquare className={Styles.tecIcon} />
                            <span>GitHub</span>
                        </div>
                        <div className={Styles.divIcon}>
                            <SiFlutter className={Styles.tecIcon} />
                            <span>Flutter</span>
                        </div>
                        <div className={Styles.divIcon}>
                            <GrMysql className={Styles.tecIcon} />
                            <span>MySQL</span>
                        </div>
                        <div className={Styles.divIcon}>
                            <FaHtml5 className={Styles.tecIcon} />
                            <span>HTML5</span>
                        </div>
                        <div className={Styles.divIcon}>
                            <FaCss3Alt className={Styles.tecIcon} />
                            <span>CSS3</span>
                        </div>
                        <div className={Styles.divIcon}>
                            <SiDotnet className={Styles.tecIcon} />
                            <span>.NET</span>
                        </div>
                        <div className={Styles.divIcon}>
                            <SiNextdotjs className={Styles.tecIcon} />
                            <span>NEXT.js</span>
                        </div>
                        <div className={Styles.divIcon}>
                            <SiMongodb className={Styles.tecIcon} />
                            <span>MongoDB</span>
                        </div>
                        <div className={Styles.divIcon}>
                            <SiMicrosoftsqlserver className={Styles.tecIcon} />
                            <span>SQLServer</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}