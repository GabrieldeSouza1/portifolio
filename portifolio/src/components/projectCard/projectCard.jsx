import React from 'react'
import Image from 'next/image'
import styles from './projectCard.module.css'
export default function ProjectCard(props) {

    return (
        <a href={props.link} target='_blank'>
            <div className={styles.projectCard}>
            <Image
            className={styles.projectImg}
            src={props.img}
            alt="Logo"
          />
                <div className={styles.cardOverlay}>
                    <div className={styles.info}>
                        <h1 className={styles.projectTitle}>{props.title}</h1>
                        <p className={styles.projectDescription}>{props.description}</p>
                    </div>
                    <div className={styles.languages}>
                        {props.languages.map((language, index) => (
                            <div className={styles.language} key={index}>
                                {language}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </a>
      )
}
