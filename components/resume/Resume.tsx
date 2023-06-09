import styles from './Resume.module.css';

export default function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <a href="CV_Maxim_Titov.pdf" download className={styles.link}>
        Download CV (pdf)
      </a>
    </section>
  );
}
