'use client'

import React, { useState, useEffect } from 'react';
import Styles from './home.module.css';
import Image from 'next/image';


export default function Home() {
  
  const [isDesktop, setIsDesktop] = useState(false);
  const [text, setText] = useState('');
  const phrase = 'Desenvolvedor FullStack e Estudante de Engenharia de Software';
  const delay = 80; // Delay entre cada caractere em milissegundos
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
          isDesktop ?
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
