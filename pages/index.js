import Head from 'next/head'
import DashCard from '../components/dashCard';
import styles from '../styles/Home.module.css'
import client from "../apollo-client";
import { DASHPOST, POPULAR_MOVIES, POPULAR_SERIES } from "../components/quarries";
import { gql } from "@apollo/client";
import { useEffect, useState } from 'react';

import ClientOnly from '../components/Clientonly';
import { useQuery } from "@apollo/client"

import Script from 'next/script';




export default function Home({ popularMovies, popularSeries }) {

  const [mobileBanner, setMobileBanner] = useState(false)


  useEffect(() => {

    if (window.innerWidth < 650) {
      setMobileBanner(true)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Naijaodin</title>
        <meta name="description" content="Naija's latest and trending movies hub"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>

        <ClientOnly>
          {mobileBanner && <div className="ads"><iframe data-aa='2226984' src='//ad.a-ads.com/2226984?size=320x100' style={{ width: '320px', height: '100px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}
        </ClientOnly>

        <ClientOnly>
          {!mobileBanner && <div className="ads"><iframe data-aa='2226990' src='//ad.a-ads.com/2226990?size=728x90' style={{ width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}
        </ClientOnly>


        <div className={styles.main}>

          <DashCard dashPosts={popularMovies} title='Popular Movies' page='movies' type='movie' />
          <DashCard dashPosts={popularSeries} title='Popular Series' page='series' type='series' />


        </div>

        <ClientOnly>
          {mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5320&reqin=iframe&w=300&h=250&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '300px', height: '250px' }}></iframe></div>}
        </ClientOnly>

        <ClientOnly>
          {!mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5310&reqin=iframe&w=728&h=90&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '728px', height: '90px' }}></iframe></div>}
        </ClientOnly>

      </main>
    </>
  )
}

export async function getStaticProps() {
  const { data: movieData } = await client.query({ query: POPULAR_MOVIES });
  const { data: seriesData } = await client.query({ query: POPULAR_SERIES });



  return {
    props: {
      popularMovies: movieData.popularMovies,
      popularSeries: seriesData.popularSeries

    },

  };
}
