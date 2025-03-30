import styles from './Achievemnts.module.css';

export default function Achievements() {
  return (
    <section>
      <h2>Contributions</h2>
      <ul className={styles.list}>
        <li>
          AlmatyJS Speaker [RU]{' '}
          <a href="https://www.linkedin.com/posts/bayev_english-below-%D0%BD%D0%B0-%D0%BF%D1%80%D0%BE%D1%88%D0%B5%D0%B4%D1%88%D0%B8%D1%85-%D0%B2%D1%8B%D1%85%D0%BE%D0%B4%D0%BD%D1%8B%D1%85-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0-activity-7243876210672308224-cVsb?utm_source=share&utm_medium=member_desktop&rcm=ACoAABmyAx8BlIE5ggROyJ3mJa-I4YYF3EFnfms">
            #4
          </a>
        </li>
        <li>
          Podcast{' '}
          <a href="https://www.youtube.com/live/NT3bAtdBcGg?si=SS4yQgFGyAzRlU_r">
            How a Frontend Developer should prepare for interviews
          </a>{' '}
          guest [RU]
        </li>
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
