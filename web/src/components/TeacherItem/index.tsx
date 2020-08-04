import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css"

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/42245201?s=460&u=ce3bae80de213ad246855873906246051fba4458&v=4"
          alt="Felipe Libertino"
        />
        <div>
          <strong>Luiz Felipe</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
        iaculis sem. Aenean sit amet nunc pharetra, ultricies.
        <br /> <br />
        Praesent et nisl sapien. Mauris maximus pellentesque lacinia. Quisque
        sagittis elit ut lorem ultricies hendrerit. Vestibulum eu venenatis
        elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae;
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
