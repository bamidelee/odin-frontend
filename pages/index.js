import Head from 'next/head'
import DashCard from '../components/dashCard';
import styles from '../styles/Home.module.css'
import icon from '../public/titleIcon.png'
import client from "../apollo-client";
import { DASHPOST, TABLE, FIXTURE, DASH_NEWS } from "../components/quarries";
import { gql } from "@apollo/client";
import { useEffect } from 'react';
import TableDisplay from '../components/tableDisplay';
import Carousel from '../components/carousel';
import FixturesDisplay from '../components/fixtureDisplay';
import ClientOnly from '../components/Clientonly';
import AdSense from 'react-adsense-ads';

export default function Home({footballNews, entertainmentNews, politicsNews, internationalNews}) {
 

  return (
    <>
      <Head>
        <title>Naijaodin</title>
        <meta name="description" content="blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/titleIcon.png/" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9120505021602496"
          crossorigin="anonymous">
        </script>
      </Head>
      <main className={styles.main}>
       <div className={styles.news}>
         <DashCard dashPosts={footballNews} title='Football' page='football'/>
         <DashCard dashPosts={entertainmentNews} title='Entertainment' page='entertainment'/>
         <DashCard dashPosts={politicsNews} title="Politics" page='politics'/>
         <DashCard dashPosts={internationalNews} title= "International" page='international'/>
       </div>
        <div className={styles.pageRight}>
        <AdSense.Google
          client='ca-pub-9120505021602496'
          slot='9297350024'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
        />
          <ClientOnly>
            <TableDisplay/>
          </ClientOnly>

          <AdSense.Google
          client='ca-pub-9120505021602496'
          slot='9297350024'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
        />
           
            <ClientOnly>
              <FixturesDisplay/>
            </ClientOnly>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const { data: footballData } = await client.query({query: DASH_NEWS, variables:{genre: 'football'}});
  const { data: entertainmentData } = await client.query({query: DASH_NEWS, variables:{genre: 'entertainment'}});
  const { data: politicsData } = await client.query({query: DASH_NEWS, variables:{genre: 'politics'}});
  const { data: internationalData } = await client.query({query: DASH_NEWS, variables:{genre: 'international'}});
  return {
    props: {
      footballNews: footballData.dashNews,
      entertainmentNews: entertainmentData.dashNews,
      politicsNews: politicsData.dashNews,
      internationalNews: internationalData.dashNews
    },
    revalidate: 60 * 60 * 60 * 6
 };
}
