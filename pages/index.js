import Head from 'next/head'
import DashCard from '../components/dashCard';
import styles from '../styles/Home.module.css'
import icon from '../public/titleIcon.png'
import client from "../apollo-client";
import { DASHPOST, TABLE, FIXTURE, FOOTBALL_NEWS } from "../components/quarries";
import { gql } from "@apollo/client";
import { useEffect } from 'react';
import TableDisplay from '../components/tableDisplay';
import Carousel from '../components/carousel';
import FixturesDisplay from '../components/fixtureDisplay';
import ClientOnly from '../components/Clientonly';

export default function Home({footballNews, tables}) {
 



 
 
  return (
    <>
      <Head>
        <title>Naijaodin</title>
        <meta name="description" content="blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/titleIcon.png/" />
      </Head>
      <main className={styles.main}>
       <div>
         <DashCard dashPosts={footballNews.slice(0,5)} title='Football news' page='football'/>
       </div>
        <div>
          <ClientOnly>
            <TableDisplay/>
          </ClientOnly>
           
            <ClientOnly>
              <FixturesDisplay/>
            </ClientOnly>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const { data: footballData } = await client.query({query: FOOTBALL_NEWS});
  const {data: tableData} = await client.query({query: TABLE})
  return {
    props: {
      footballNews: footballData.footballNews,
      tables: tableData.tables
    },
 };
}
