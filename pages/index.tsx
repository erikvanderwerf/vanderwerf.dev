import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, {siteTitle} from "../components/layout";
import {getSortedPostsData} from "../lib/posts";
import linkedInLogo from '../public/images/In-Blue-128@2x.png';
import {GetStaticProps} from "next";
import {DateTime} from "luxon";
import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

const SECOND_MS = 1000;
const REFRESH_TIMEOUT = SECOND_MS / 10;
const START = DateTime.fromISO("2015-06-01");

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}

function getYearsExperience() {
  return DateTime.now().diff(START, 'years').years.toString().slice(0, 10);
}

export default function Home({allPostsData}: { allPostsData: { date: string; title: string; id: string }[] }) {
  const [yearsExperience, setYearsExperience] = useState<string>(getYearsExperience());

  useEffect(() => {
    const interval = setInterval(() => {
      setYearsExperience(getYearsExperience());
    }, REFRESH_TIMEOUT);
    return () => clearInterval(interval);
  }, [])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p suppressHydrationWarning>
          I am a computer engineer with {yearsExperience} years of programming experience. Occasionally I'll do
          something interesting.
        </p>
      </section>
      <Link href='https://github.com/erikvanderwerf'>
        <Image
          src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
          alt='GitHub Logo'
          width={560}
          height={560}
          style={{
            width: '6em',
            height: 'auto',
          }}
        />
      </Link>
      <Link href='https://www.linkedin.com/in/erik-vanderwerf/'>
        <Image
          src={linkedInLogo}
          alt='LinkedIn Logo'
          style={{
            width: '6em',
            height: '6em',
          }}
        />
      </Link>
    </Layout>
  )
}
