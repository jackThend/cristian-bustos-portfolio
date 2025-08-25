
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#about">Sobre Mí</a>
        <a href="#work">Experiencia</a>
        <a href="#hobbies">Vida Personal</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
