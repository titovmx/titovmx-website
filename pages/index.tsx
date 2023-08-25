import { Titillium_Web } from 'next/font/google';
import Head from 'next/head';
import clsx from 'clsx';
import styles from '@/styles/Home.module.css';
import AboutMe from '../components/aboutMe/AboutMe';
import Achievements from '../components/achievements/Achievements';
import Contacts from '../components/contacts/Contacts';
import Header from '../components/header/Header';
import Resume from '../components/resume/Resume';

const titillium = Titillium_Web({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Maxim Titov</title>
        <meta name="description" content="Personal website of Maxim Titov, Senior Frontend Developer" />
        <meta name="og:title" content="Maxim Titov" />
        <meta name="og:description" content="Senior Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={clsx(styles.app, titillium.className)}>
        <Header />
        <main>
          <AboutMe />
          <Contacts />
          <Achievements />
          <Resume />
        </main>
      </div>
    </>
  );
}
