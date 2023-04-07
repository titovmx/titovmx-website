import Link from 'next/link';
import styles from './Header.module.css';

type NavItem = {
  anchor: string;
  title: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    anchor: 'home',
    title: 'Home',
  },
  {
    anchor: 'about',
    title: 'About me',
  },
  {
    anchor: 'resume',
    title: 'Resume',
  },
  {
    anchor: 'skills',
    title: 'Skills',
  },
  {
    anchor: 'contacts',
    title: 'Contacts',
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.anchor}>
              <Link href={`#${item.anchor}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
