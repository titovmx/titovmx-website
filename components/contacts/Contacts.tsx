import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faTelegram, faInstagram, faBlogger, faDev } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavItem } from '../../types/navigation';
import styles from './Contacts.module.css';

type ContactIcon = {
  id: string;
  url: string;
  faIcon: IconDefinition;
};

const ICONS: ContactIcon[] = [
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/titovmx/',
    faIcon: faLinkedin,
  },
  {
    id: 'github',
    url: 'https://github.com/titovmx',
    faIcon: faGithub,
  },
  {
    id: 'dev',
    url: 'https://dev.to/titovmx',
    faIcon: faDev,
  },
  {
    id: 'telegram',
    url: 'https://t.me/titovmx',
    faIcon: faTelegram,
  },
  {
    id: 'instagram',
    url: 'https://instagram.com/titovmx',
    faIcon: faInstagram,
  },
];

export default function Contacts() {
  return (
    <section id={NavItem.Contacts} className={styles.contacts}>
      <ul className={styles.iconList}>
        {ICONS.map((icon) => (
          <li key={icon.id}>
            <a href={icon.url} target="_blank">
              <FontAwesomeIcon icon={icon.faIcon} size="2xl" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
