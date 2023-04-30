import Head from 'next/head'
import DashCard from '../components/dashCard';
import styles from '../styles/Home.module.css'
import client from "../apollo-client";
import { DASHPOST,POPULAR_MOVIES, POPULAR_SERIES } from "../components/quarries";
import { gql } from "@apollo/client";
import { useEffect, useState } from 'react';
import DesktopBanner from '../components/desktopBanner';
import ClientOnly from '../components/Clientonly';
import { useQuery } from "@apollo/client"
import Banner from '../components/banner';
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
        <meta name="description" content="blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        
        <ClientOnly>
          <Banner slot={mobileBanner? '1523ac683e9630ccc8aba4793a81d92b' : '8c47067f1ac7389ef98d7ba0c597c9d9'}/>
        </ClientOnly>
      
        <div className={styles.main}>

          <DashCard dashPosts={popularMovies} title='Popular Movies' page='movies' type='movie' />
          <DashCard dashPosts={popularSeries} title='Popular Series' page='series' type='series' />
        
         
        </div>
        {!mobileBanner && <div>
          <Script async="async" data-cfasync="false" src="//pl18660884.highrevenuegate.com/1e845c512aba6f843b89be278fa82a95/invoke.js"></Script>
          <div id="container-1e845c512aba6f843b89be278fa82a95"></div>
        </div>}

        {mobileBanner && <DesktopBanner slot='1d24a5888bd79927cba80711f10c599a' />
        }
      </main>
    </>
  )
}

export async function getStaticProps() {
  const { data: movieData} = await client.query({ query: POPULAR_MOVIES });
  const { data: seriesData} = await client.query({ query: POPULAR_SERIES });
  


  return {
    props: {
      popularMovies: movieData.popularMovies,
      popularSeries: seriesData.popularSeries
     
    },

  };
}
