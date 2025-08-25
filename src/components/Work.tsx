
import React from 'react';
import styles from './Work.module.css';

const Work = () => {
  return (
    <section id="work" className={styles.work}>
      <h2 className={styles.title}>Experiencia Destacada</h2>
      <div className={styles.card}>
        <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop" alt="Tech project" className={styles.cardImage} />
        <div className={styles.cardContent}>
          <h3>Proyecto: Actualización Nacional de Sistemas POS</h3>
          <p>
            Lideré la planificación y ejecución de una actualización completa de los sistemas de Punto de Venta (POS) en más de 100 sucursales a nivel nacional. El proyecto implicó la migración de hardware y software, minimizando el tiempo de inactividad y asegurando una transición fluida para el personal operativo.
          </p>
          <p>
            <strong>Resultado:</strong> Se logró un aumento del 25% en la eficiencia del procesamiento de pedidos y se fortaleció la seguridad de las transacciones, sentando las bases para futuras innovaciones en la experiencia del cliente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
