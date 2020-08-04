import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/21224584?s=460&u=bdfdd0636c0d4c49a72b4cfc981b5c25e80bc949&v=4" alt="jeison de borba"/>
        <div>
          <strong>Jeison de Borba</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de quimica avançada.
        <br /><br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas atraveś de experiências.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>    
  );
}

export default TeacherItem;
