
import React from 'react';
import styles from './Hobbies.module.css';

const Hobbies = () => {
  return (
    <section id="hobbies" className={styles.hobbies}>
      {/* 
        NOTA PARA EL USUARIO: 
        Este es un placeholder. Para usar un video, descomenta el <video> y comenta la <img>.
        Asegúrate de tener un archivo de video (ej. video.mp4) en la carpeta /public de tu proyecto.
      */}
      <img 
        src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop" 
        alt="Mountain landscape" 
        className={styles.backgroundMedia}
      />
      {/*
      <video autoPlay loop muted className={styles.backgroundMedia}>
        <source src="/video.mp4" type="video/mp4" />
      </video>
      */}
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>Más Allá del Código: Conquistando Cumbres</h2>
        <p>
          Cuando no estoy gestionando redes o sistemas, me encontrarás en la montaña. El trekking, el montañismo y los deportes extremos son mi forma de desconectar de lo digital y reconectar con la naturaleza. Cada cumbre alcanzada es un recordatorio de que con perseverancia y pasión, no hay límite para lo que podemos lograr.
        </p>
      </div>
    </section>
  );
};

export default Hobbies;
