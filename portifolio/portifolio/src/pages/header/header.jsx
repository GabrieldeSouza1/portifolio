"use client"
import Image from "next/image"
import Styles from "./header.module.css"
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import Menu from "@/components/menu/menu"
import { useState, useEffect } from "react"
export default function Header() {
    var width = 1000;
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
          width > 600 ?
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

                        </div></> :<div className={Styles.menu}><Menu/></div> 
        }

          


        </div>
    )
}