'use client'

import React, { useState, useEffect } from 'react';
import Styles from './home.module.css';
import Image from 'next/image';


export default function Home() {
  const [text, setText] = useState('');
  const phrase = 'Desenvolvedor FullStack e Estudante de Engenharia de Software';
  const delay = 80; // Delay entre cada caractere em milissegundos
  var width = 1000;
  useEffect(() => {
    let currentCharIndex = 0;

    const typeText = async () => {
      if (currentCharIndex === phrase.length) return;

      setText(phrase.substring(0, currentCharIndex + 1));
      currentCharIndex++;

      const timeout = delay;
      setTimeout(typeText, timeout);
    };

    typeText();
  }, []);

  return (

    <>
      <div className={Styles.main}>

        <div className={Styles.divApresentacao}>
          <Image
            src="/logoBranca.svg"
            alt="Logo"
            width={100}
            height={50}
            priority
          />
          <p>{text}</p>
         
        </div>

        {
          width > 600 ?
            <div className={Styles.divFoto}>
              <Image
                src="/fteditadas.png"
                alt="Vercel Logo"
                width={400}
                height={400}
                priority
              />
            </div> : ""
        }

      </div>
    </>
  );
}
