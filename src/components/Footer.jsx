import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {

let mybutton = document.getElementById("myBtn");




  return (
    <footer className={styles.footerBg}>
      <div className={styles.footerLogo}>
        <div className="container">
          <Link to="" className="myBtn">
          </Link>
        </div>
      </div>
      <div className={`container ${styles.footer}`}>
        <div>
          <h2 className={styles.secoes}>Contato</h2>
          <ul>
            <li>
              <a href="">21 66666-6666</a>
            </li>
            <li>
              <a href="">
                cafeteria@coffeverse.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={styles.secoes}>Informações</h2>
          <ul>
            <li>
              <a href='/'className="myBtn">Home</a> 
            </li>
            <li>
              <a href='/login'className="myBtn">Login</a>
            </li>
            <li>
              <a href='/login'className="myBtn">Cadastro</a>
            </li>
            <li>
              <a href='/QuemSomos' className="myBtn">Quem somos</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
