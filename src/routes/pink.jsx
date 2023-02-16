import axios from 'axios';

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Slide from "../components/Slide";

import "./pink.css";

import img1 from '../img/home/img1.png';
import img2 from '../img/home/img2.png';
import img3 from '../img/home/img3.png';
import thumb1 from '../img/home/thumb1.png';
import thumb2 from '../img/home/thumb2.png';
import thumb3 from '../img/home/thumb3.png';
import facebook from '../img/home/facebook.png';
import twitter from '../img/home/twitter.png';
import instagram from '../img/home/instagram.png';


const Pink = () => {

  return (
    <div>
   
     <section className='papo'>
      <div className="circle3"></div>
      <div className="conteudo">
      <div className="textoBox">
          <h2>O melhor café com inovação<p>Está <span className='cor3'>aqui</span></p></h2>
          <p>Somos uma cafeteria com temática geek, cultura pop e tecnologica! Nós temos várias variedades de cafés, chás, bolos, refeições, biscoitos e muito mais.</p>
          <a href='/QuemSomos'>Saiba Mais</a> 
        </div>
         <div className="imgBox">
          <img src={img3} className='copos'></img>
        </div>
        </div>
        <ul className='thumb'>
        <li><Link to={`/`}><img src={thumb1}></img></Link></li>
          <li><Link to={`/rose`}><img src={thumb2}></img></Link></li>
          <li><Link to={`/pink`}><img src={thumb3}></img></Link></li>
        </ul>
        <ul className="sci">
          <li><a href=''><img src={facebook}></img></a></li>
          <li><a href=''><img src={twitter}></img></a></li>
          <li><a href=''><img src={instagram}></img></a></li>
        </ul>
      </section>
      <div className='imagens'>
        <br />
        <br />
        <br />
        <h1>Conheça nossa casa</h1>
      <Slide />
      <p>Estas são algumas das experiências que você vai ter no nosso estabelecimento. Conforto, lazer e relaxamento te esperam no momento em que você precisar de um café ou jogar. Ou quem sabe os dois!</p>
      
      </div>

</div>
);
};
export default Pink