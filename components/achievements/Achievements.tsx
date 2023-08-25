import styles from './Achievemnts.module.css';

export default function Achievements() {
  return (
    <section>
      <h2>Contributions</h2>
      <ul className={styles.list}>
        <li>
          Maintainer of <a href="https://ru.react.dev/">React Docs</a> (Russian translation)
        </li>
        <li>
          GitHub + Dev 2023 Hackathon{' '}
          <a href="https://dev.to/titovmx/automate-your-changelog-and-month-product-updates-in-your-blog-with-ai-498p">
            Participant
          </a>
        </li>
      </ul>
    </section>
  );
}
