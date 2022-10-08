import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar';
import MidSection from '../components/MidSection/MidSection';
import EventsSection from '../components/EventsSection';

const Home: NextPage = () => {

  return (
    <div className="">
      <Navbar/>
      <EventsSection />
    </div>
  )
}

export default Home
