
import React, { useEffect, useRef } from "react";
import styles from './styles/stars.module.css';
function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  const nebulae = container.querySelectorAll(`.${styles.nebula}`);

  nebulae.forEach((nebula) => {
    // Random speed per nebula
    let speedX = (Math.random() - 0.5) * 2; // between -0.75 and 0.75
    let speedY = (Math.random() - 0.5) * 2;

    // Start from their actual CSS positions
    let x = nebula.offsetLeft;
    let y = nebula.offsetTop;

    function move() {
      const maxX = container.offsetWidth - nebula.offsetWidth;
      const maxY = container.offsetHeight - nebula.offsetHeight;

      x += speedX;
      y += speedY;

      // Bounce off edges
      if (x <= 0 || x >= maxX) speedX *= -1;
      if (y <= 0 || y >= maxY) speedY *= -1;

      nebula.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(move);
    }

    move();
  });
}, []);


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
  <section ref={containerRef} className={styles.hero}>
    <h1 className={styles.heroTitle}>Hi, I am Rugved</h1>
    <div className={`${styles.nebula} ${styles.red}`}></div>
    <div className={`${styles.nebula} ${styles.purple}`}></div>
    <div className={`${styles.nebula} ${styles.blue}`}></div>
    <div className={`${styles.nebula} ${styles.yellow}`}></div>
    <div className={`${styles.nebula} ${styles.green}`}></div>
    <div className={`${styles.nebula} ${styles.orange}`}></div>
    <div className={`${styles.nebula} ${styles.red}`}></div>
    {stars}
  </section>
)
}

export default Hero;
