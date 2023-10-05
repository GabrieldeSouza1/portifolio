'use client'

import React, { useState, useEffect } from 'react';
import Image from "next/image"
import Styles from "./header.module.css"
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import Menu from "@/components/menu/menu"

export default function Header() {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        // Função para verificar se a tela é desktop
        const checkIsDesktop = () => {
          setIsDesktop(window.innerWidth > 1000);
        };
    
        // Verificar o tamanho da tela ao carregar a página
        checkIsDesktop();
    
        // Adicionar um ouvinte de evento para o redimensionamento da tela
        window.addEventListener('resize', checkIsDesktop);
    
        // Remover o ouvinte de evento ao desmontar o componente
        return () => {
          window.removeEventListener('resize', checkIsDesktop);
        };
      }, []);
    return (
        <div className={Styles.header}>
            <div className={Styles.containerLogo}>
                <Image
                    src="/logoBranca.svg"
                    alt="Vercel Logo"
                    width={100}
                    height={50}
                    priority
                />
            </div>

            {
                isDesktop ?
                    <><div className={Styles.menu}>

                        <a className={Styles.link} href="#aboutMe">
                            <div className={Styles.btnOne}>
                                Sobre mim
                            </div>
                        </a>
                        <a className={Styles.link} href="#projects">
                            <div className={Styles.btnOne}>
                                Projetos
                            </div>
                        </a>
                    </div><div className={Styles.media}>
                            <a href="https://www.linkedin.com/in/gabriel-de-souza-18928b266/"><FaLinkedin className={Styles.icon} /></a>
                            <a href="https://github.com/GabrieldeSouza1"><FaGithubSquare className={Styles.icon} /></a>

                        </div></> : <div className={Styles.menu}><Menu /></div>
            }




        </div>
    )
}