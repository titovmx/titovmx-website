import Image from 'next/image';
import { useState } from 'react';
import avatarJpg from '../../public/avatar.jpg';
import avatarWebp from '../../public/avatar.webp';
import { NavItem } from '../../types/navigation';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  const [avatarSrc, setAvatarSrc] = useState(avatarWebp);

  return (
    <section id={NavItem.Home} className={styles.container}>
      <div className={styles.avatarContainer}>
        <Image src={avatarSrc} alt="avatar" onError={() => setAvatarSrc(avatarJpg)} className={styles.avatar} />
      </div>
      <div className={styles.bioContainer}>
        <h1>Hi, my name is Maxim Titov</h1>
        <h2>I am a senior frontend developer</h2>
        <p className={styles.bio}>
          I have developed products to help teams to automate their processes and efficiently collaborate worldwide
        </p>
      </div>
    </section>
  );
}
