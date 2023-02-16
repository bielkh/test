import React from 'react'
import "./login.css";

import facebook from '../img/images/facebook.png';
import twitter from  '../img/images/twitter.png';
import linkedin from '../img/images/linkedin.png';
import instagram from '../img/images/instagram.png';


function Login() {
  
 function Cadastro(){
  document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
	
 }

  
  return (
    <div>
    <section className='login'><div class="cont">
    <div class="formSignIn">
      <h2>Login</h2>
      <label>
        <span>E-mail</span>
        <input type="email" name="email"/>
      </label>
      <label>
        <span>Senha</span>
        <input type="password" name="password"/>
      </label>
      <button class="submit" type="button">Login</button>
      <p class="forgot-pass">Esqueceu a senha?</p>

      <div class="social-media">
        <ul>
          <li><img src={facebook}/></li>
          <li><img src={twitter}/></li>
          <li><img src={linkedin}/></li>
          <li><img src={instagram}/></li>
        </ul>
      </div>
    </div>

    <div class="sub-cont">
      <div class="img">
        <div class="img-text m-up">
          <h2>Novo aqui?</h2>
          <p>Cadastre-se e venha descobrir o melhor do nosso site!</p>
        </div>
        <div class="img-text m-in">
          <h2>Já possui uma conta?</h2>
          <p>Se você já possui uma conta, registre-se, sentimos sua falta!</p>
        </div>
        <div class="img-btn" onClick={Cadastro}>
          <span class="m-up">Cadastro</span>
          <span class="m-in">Registro</span>
        </div>
      </div>
      <div class="formSignUp">
        <h2>Cadastre-se</h2>
        <label>
          <span>Nome</span>
          <input type="text"/>
        </label>
        <label>
          <span>E-mail</span>
          <input type="email"/>
        </label>
        <label>
          <span>Senha</span>
          <input type="password"/>
        </label>
        <label>
          <span>Confirme a senha</span>
          <input type="password"/>
        </label>
        <button type="button" class="submit">cadastre-se agora</button>
      </div>
    </div>
  </div>
  </section>
  <script type="text/javascript" src='./script.js'></script>
  </div>
  )
}

export default Login