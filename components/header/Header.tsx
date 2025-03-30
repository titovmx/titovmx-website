import Link from 'next/link';
import { useState } from 'react';
import { NavItem, NavItemId } from '../../types/navigation';
import styles from './Header.module.css';

type NavElement = {
  anchor: NavItemId;
  title: string;
};

export const NAV_ITEMS: NavElement[] = Object.keys(NavItem).map((navItemId) => ({
  anchor: NavItem[navItemId as keyof typeof NavItem],
  title: navItemId,
}));

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.anchor}>
              <Link href={`#${item.anchor}`} scroll={false} onClick={() => setIsMenuOpen(false)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
