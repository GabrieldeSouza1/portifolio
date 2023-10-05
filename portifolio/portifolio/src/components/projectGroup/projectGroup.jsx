import React from 'react'

import ProjectCard from '../projectCard/projectCard'

import Styles from './projectGroup.module.css'

import protonImg from '../../../public/images/project/proton.png'
import monedasImg from '../../../public/images/project/monedas.png'
import atelierImg from '../../../public/images/project/atelier_picinin.png'
import arenaImg from '../../../public/images/project/arena.png'
import medsImg from '../../../public/images/project/meds.png'



export default function ProjectsGroup() {
  return (
    <div className={Styles.projectGroup}>
      <div className={Styles.projectGroupContainer}>
        <h1>Projetos</h1>
        <div className={Styles.line}>
          <ProjectCard className={Styles.projectCard} img={protonImg} title="ProtOn" description="Sistema de recomendação de protocolos odontológicos" languages={['Javascript', 'React', 'CSS', 'MongoDB', 'NodeJS']} link="https://github.com/GabrieldeSouza1/Odontologia" />
          <ProjectCard className={Styles.projectCard} img={atelierImg} title="Atelier Picinin" description="Sistema de divulgação e gerenciamento do Atelier Picinin" languages={['Javascript', 'React', 'CSS', 'MongoDB', 'NodeJS']} link="https://github.com/GabrieldeSouza1/plf-es-2022-2-ti3-6653100-sistema-atelier-picinin" />
          <ProjectCard className={Styles.projectCard} img={monedasImg} title="Mone.das" description="Sistema de moedas estudantil" languages={['Javascript', 'React', 'CSS', 'MongoDB', 'NodeJS']} link="https://github.com/GabrieldeSouza1/lab3-lds-m-1-2023-grupo1" />
        </div>
        <div className={Styles.line}>
          <ProjectCard className={Styles.projectCard} img={medsImg} title="MEDS" description="Projeto frontend de um sistema hospitalar" languages={['HTML', 'CSS', 'Javascript']} link="https://github.com/GabrieldeSouza1/TIAW-PUC" />
          <ProjectCard className={Styles.projectCard} img={arenaImg} title="Arena" description="Sistema de organização de partidas esportivas" languages={['HTML', 'CSS', 'Javascript', 'NodeJS']} link="https://github.com/GabrieldeSouza1/plf-es-2022-1-ti2-0924100-arena" />

        </div>
      </div>
    </div>
  )
}
