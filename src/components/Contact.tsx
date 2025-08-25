
import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Hablemos</h2>
      <p>Siempre estoy abierto a conectar con otros profesionales y explorar nuevas oportunidades.</p>
      <a href="mailto:cristian.j.bustos@email.com" className={styles.emailLink}>
        cristian.j.bustos@email.com
      </a>
    </section>
  );
};

export default Contact;
