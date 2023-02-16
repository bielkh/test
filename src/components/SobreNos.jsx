import React, { useState, useEffect } from 'react';
import sobreImg from '../img/sobrenos.png';
import sobreImg2 from '../img/barista.png';
import styles from './SobreNos.module.css';
import ingrid from '../img/ingrid.png';
import pamela from '../img/pamela.png';
import ronaldo from '../img/RR.jpg';
import gabriel from '../img/gabriel.jpg';
import Navbar from './NavBar';
import ClipLoader from "react-spinners/ClipLoader";

function SobreNos() {
  const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true)
  setTimeout(() =>{
  setLoading(false)
}, 1000)
}, [])

  return (
    <div>
 { 
      loading ?


   <ClipLoader
   color={'#dda3ff'}
   loading={loading}
   size={150}

 />
      :
    <section className='comeFromBottom'>
      <div className={`${styles.secao1} container`}>
        <div>
          <h2 className={styles.titulo}>Quem Somos</h2>
          <p className={styles.content}>
            Somos uma cafeteria com temática geek, cultura pop e tecnologica! Nós temos várias variedades de cafés, chás, bolos, refeições, biscoitos e muito mais. Combinamos o amor pelo café, ao amor pela cultura pop e o amor com a tecnologia e inovação. Assim, trazendo uma experiência de outra realidade para os clientes que desejarem uma experiência diferente do seu cotidiano!
          </p>
        </div>
        <img
          src={sobreImg}
          className='comeFromRight'
          alt=""
        />
      </div>

      <div className={styles.secao2Bg}>
        <div className={`${styles.secao2} container`}>
          <img
            className='comeFromLeft'
            src={sobreImg2}
            alt=""
          />
          <div>
            <h2 className={styles.titulo}>Serviços</h2>
            <ul className={`${styles.lista} ${styles.content}`}>
              <li>Deliciosos cafés, quentes ou gelados, chás, bolos, biscoitos e mais do mundo da confeitaria!</li>
              <li>
                Adicionar uma de realidade virtual para que o cliente se sinta no metaverso se desejar.
              </li>
              <li>
                Um canto com um pc para poder jogar, produzir ou programar a vontade desde que tenha horário marcado!
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.secao3} container`}>
        <div>
          <center><h2 className={styles.titulo}>Nosso time</h2></center>
        </div>
        <div className={styles.equipe}>
          <img src={ingrid} alt="" />

          <img src={pamela} alt="" />

          <img src={ronaldo} alt="" />

          <img src={gabriel} alt="" />

        </div>
      </div>
    </section>
}
    </div>
  );
}

export default SobreNos;
