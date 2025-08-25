
import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Cristian Javier Bustos Moya</h1>
        <p className={styles.subtitle}>Encargado Senior de Informática, Sistemas y Telecomunicaciones</p>
        <p className={styles.tagline}>Liderando la infraestructura tecnológica para una marca global, un byte a la vez.</p>
      </div>
    </section>
  );
};

export default Hero;
