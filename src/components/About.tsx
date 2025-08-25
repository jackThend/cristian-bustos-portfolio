
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <h2 className={styles.title}>Sobre Mí</h2>
        <p>
          Como Encargado Senior de Informática en Little Caesars Pizza, dirijo la estrategia y operación de toda la infraestructura tecnológica en Chile. Mi enfoque se centra en garantizar la máxima disponibilidad, seguridad y eficiencia de los sistemas, desde la red corporativa y los servidores hasta los puntos de venta en cada sucursal.
        </p>
        <p>
          Con más de una década de experiencia, he desarrollado una profunda experiencia en la gestión de redes, ciberseguridad, administración de sistemas y liderazgo de equipos técnicos. Mi misión es implementar soluciones tecnológicas innovadoras que no solo resuelvan problemas complejos, sino que también impulsen el crecimiento y el éxito del negocio.
        </p>
      </div>
    </section>
  );
};

export default About;
