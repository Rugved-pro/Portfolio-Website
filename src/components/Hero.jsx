import React from 'react';
import styles from './styles/stars.module.css';
function Hero() {
  const stars = Array.from({ length: 300 }).map((_, i) => {
    const top = Math.random() * 100;   // random %
    const left = Math.random() * 100;  // random %
    const delay = Math.random() * 5;   // random animation delay
    return (
      <span
        key={i}
        className={styles.star}
        style={{
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
        }}
      ></span>
    );
  });
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle} >Hi, I am Rugved</h1>
      <div className={`${styles.nebula} ${styles.red}`}></div>
      <div className={`${styles.nebula} ${styles.purple}`}></div>
      <div className={`${styles.nebula} ${styles.blue}`}></div>
      {stars}
    </section>
  );
}

export default Hero;
