import Link from 'next/link';
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
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.anchor}>
              <Link href={`#${item.anchor}`} scroll={false}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
