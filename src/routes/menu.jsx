import './menu.css';

import React, { useState, useEffect } from 'react';

import sonicRings from '../img/home/sonicrings.png';
import playCookies from '../img/home/PlayCookies.jpeg';
import pokeBurgers from '../img/home/PokeBurgers.png';
import Creeper from '../img/home/creepercandy.jpg';
import caCo from '../img/home/CacoCookie.jpg';
import pokeCakes from '../img/home/pokecakes.png';
import strogCarne from '../img/home/strogcarne.jpg';
import lasaBolo from '../img/home/lasabolo.jpg';
import feiJo from '../img/home/feijo.jpg';
import expresso from '../img/home/1espresso.jpg';
import frapMor from '../img/home/frapmor.png';
import chaVer from '../img/home/chaver.jpg';

import ClipLoader from "react-spinners/ClipLoader";
 

const menu = () => {

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
      <div>
           <main>
    <h1>Cardápio Gamer - Semanal</h1>
          <section class="mais-vendidos">
             <div class="container-games">
                 <div class="cartoes">
                     <h3> Biscoitos Gamers </h3>
                     <img class="image__img" src={playCookies}alt=""/>
                     <div class="image__overlay image__overlay--blur">
                         <div class="image__title">GamersCookies</div>
                         <p class="image__description">
                             Cookie com cobertura de chocolate tematizada com os butões do playstation.
                             <button class="butao">
                                 <ul>
                                     <li><a href="/pokebolos">Peça já o seu!</a></li>
                                      </ul>
                             </button>
                         </p>
                     </div>
                     <h3>R$ 4,90</h3>
                 </div>  
                     <div class="cartoes">
                     <h3>Aneis de Cebola</h3>
                     <img class="image__img" src={sonicRings} alt=""/>
                     <div class="image__overlay image__overlay--blur">
                     <div class="image__title">Aneis do Sonic</div>
                     <p class="image__description">
                         dez aneis de cebola, para você se aventurar junto de Sonic.
                         <button class="butao" >
                             <ul>
                                 <li><a href="/pokebolos">Peça já o seu!</a></li>
                                  </ul>
                         </button>
                     </p>
                     </div>
                     <h3>R$ 20,00</h3>
                 </div>
                 <div class="cartoes">
                     <h3>Escolha <br/>Seu Incial<br/></h3> 
                     <img class="image__img" src={pokeBurgers} alt=""/>
                     <div class="image__overlay image__overlay--blur">
                         <div class="image__title">Pokemon</div>
                         <p class="image__description">
                            Três hamburguers artesanais, cada um baseados nos iniciais do Pokemon Yellow.
                            <button class="butao">
                             <ul>
                                 <li><a href="/pokebolos">Peça já o seu!</a></li>
                                  </ul>
                         </button>
                         </p>
                     </div>
                     <h3>R$ 23,00</h3>
                 </div>
                 <div class="cartoes">
                     <h3> Doce <br/>Creeper <br/></h3>
                     <img class="image__img" src={Creeper} alt=""/>
                     <div class="image__overlay image__overlay--blur">
                         <div class="image__title">CreeperCandy</div>
                         <p class="image__description">
                             Doce de margarina e marshmallows derretidos, com tema de Creeper.
                             <br />
                             <button class="butao">
                                 <ul>
                                     <li><a href="/pokebolos">Peça já o seu!</a></li>
                                      </ul>
                             </button>
                         </p>
                     </div>
                     <h3>R$ 5,90</h3>
                 </div>
                 <div class="cartoes">
                     <h3> Caco Demon </h3>
                     <img class="image__img" src={caCo} alt=""/>
                     <div class="image__overlay image__overlay--blur">
                         <div class="image__title">Caco <br/> Cookies <br/></div>
                         <p class="image__description">
                             Doces amanteigados com forma do Cacodemon de DOOM.
                             <button class="butao">
                                 <ul>
                                     <li><a href="/pokebolos">Peça já o seu!</a></li>
                                      </ul>
                             </button>
                         </p>
                     </div>
                     <h3>R$ 3,40</h3>
                 </div>  
                 <div class="cartoes">
                     <h3> PokeBolos </h3>
                     <img class="image__img" src={pokeCakes} alt=""/>
                     <div class="image__overlay image__overlay--blur">
                         <div class="image__title">Poke <br/> Bolos <br/></div>
                         <p class="image__description">
                             Mini bolo de chocolate com vanilla com cobertura, em formato de pokebolas.
                             <button class="butao">
                                 <ul>
                                     <li><a href="/pokebolos">Peça já o seu!</a></li>
                                      </ul>
                             </button>
                         </p>
                     </div>
                     <h3>R$ 9,90</h3>
                 </div>
                   
               
             </div>
         </section>
    <section class="todos-produtos">
             <h2>Cardápio Fixo</h2>
             <div class="container-games">
                 <div class="cartoes">
                     <h3>Strogonoff de Carne do Metaverse</h3>
                     <img class="image__img" src={strogCarne} alt=""/> 
                     <div class="image__overlay image__overlay--blur">
                         <div class="image__title">Strogonoff de Carne</div>
                         <p class="image__description">
                             Delicioso Strogonoff de Carne com Champignon, acompanha Arroz e Batata Palha ou Batata Frita.
                             <button class="butao">
                                 <ul>
                                     <li><a href="/pokebolos">Peça já o seu!</a></li>
                                      </ul>
                             </button>
                         </p>
                     </div>
                     <h3>R$ 28,00</h3>
                 </div>
                 <div class="cartoes">
                     <h3>Lasanha Bolonhesa da programação</h3>
                     <img  class="image__img" src={lasaBolo} alt=""/>
                     <div class="image__overlay image__overlay--blur">
                         <div class="image__title">Lasanha Bolonhesa</div>
                     <p class="image__description">
                         Lasanha bolonhesa com molho branco, queijo e presunto. Acompanha Arroz, Salada ou Batata Frita.
                         <button class="butao">
                             <ul>
                                 <li><a href="/pokebolos">Peça já o seu!</a></li>
                                  </ul>
                         </button>
                     </p>
                    </div>
                     <h3>R$ 32,20</h3>
                 </div>
                 <div class="cartoes">
                     <h3>Feijoada virtual</h3>
                     <img class="image__img" src={feiJo} alt=""/>
                     <div class="image__overlay image__overlay--blur">
                         <div class="image__title">Feijoada virtual</div>
                         <p class="image__description">
                             Feijoada completa. Acompanha arroz, farofa, torresmo e couve.
                             <br />
                             <button class="butao">
                                 <ul>
                                     <li><a href="/pokebolos">Peça já o seu!</a></li>
                                      </ul>
                             </button>
                         </p>
                     </div>
                     <h3>R$ 28,80</h3>
                 </div>
                 <div class="cartoes">
                     <h3>Cyber Expresso</h3> 
                     <img class="image__img" src={expresso} alt=""/>
                     <div class="image__overlay image__overlay--blur">
                         <div class="image__title">Cyber Expresso</div>
                         <p class="image__description">
                             Café expresso quentinho no estilo cibernético
                             <button class="butao">
                                 <ul>
                                     <li><a href="/pokebolos">Peça já o seu!</a></li>
                                      </ul>
                             </button>
                         </p>
                     </div>
                     <h3>R$ 13,50</h3>
                 </div>
                 <div class="cartoes">
                     <h3>Frappuccino First Blood</h3>
                     <img class="image__img" src={frapMor}alt=""/>
                     <div class="image__overlay image__overlay--blur">
                         <div class="image__title">Frappuccino First Blood</div>
                         <p class="image__description">
                             Delicioso café gelado frappuccino de morango com pedaços e calda de morango. Inspirado na expressão 'First Blood' que significa a primeira morte do jogo. Opção com ou sem café.
                             <br />
                             <button class="butao">
                                 <ul>
                                     <li><a href="/pokebolos">Peça já o seu!</a></li>
                                      </ul>
                             </button>
                         </p> 
                     </div>
                     <h3>R$ 17,50</h3>     
                 </div>
              <div class="cartoes">
              <h3>Chá Healing Verde</h3>
             <img class="image__img" src={chaVer} alt=""/>
             <div class="image__overlay image__overlay--blur">
             <div class="image__title">chá Healing Verde</div>
             <p class="image__description">
             Chá delicioso verde e quente inspirado em poções de cura nos jogos. Ótimo para dias frios.
             <button class="butao">
                 <ul>
                     <li><a href="/pokebolos">Peça já o seu!</a></li>
                      </ul>
             </button>
             </p>
             </div>
             <h3>R$ 11,90</h3>
             </div>
           </div>
         </section>
     </main>
</div>
}
</div>
);
};

export default menu
