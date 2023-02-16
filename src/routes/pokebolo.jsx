import React from 'react'

import pokeCakes from '../img/home/pokecakes.png'

import './pokeBolo.css';


const pokeBolo = () => {


return (
    <div>
  <body>
    <main class="contido">

      
      <div class="coluna-esquerda">
        <img class="image" src={pokeCakes} alt=""/>
    </div>


    
      <div class="coluna-direita">
     <div class="textao">
          <span>É perigoso ir sozinho leve isto!</span>
          <h1>Poke Bolos</h1>
          <p> Mini bolo de chocolate com vanilla com cobertura, em formato de pokebolas.</p>
        </div>
      <div class="textao">
        <div class="cable-config">
            <span>Escolha como quer receber </span>

            <div class="cable-choose">
            <a href="#">Tarifa extra, dependendo da região</a>
              <button>Delivery</button>
              <button>Pegar na loja</button>
              
            </div>
          </div>
        </div>

       
        <div class="preço">
          <span>R$ 23,00</span>
          <a href="#" class="carrito">Adicione no carrinho</a>
        </div>
      </div>
    </main>
  </body>
    </div>
)
}
export default pokeBolo
