import Head from 'next/head'
import DashCard from '../components/dashCard';
import styles from '../styles/Home.module.css'
import client from "../apollo-client";
import { DASHPOST, TABLE, FIXTURE, DASH_NEWS, LATEST_MOVIES, TRENDING } from "../components/quarries";
import { gql } from "@apollo/client";
import { useEffect, useState } from 'react';
import Table from '../components/tables'
import Carousel from '../components/carousel';
import DesktopBanner from '../components/desktopBanner';
import ClientOnly from '../components/Clientonly';
import { useQuery } from "@apollo/client"
import Banner from '../components/banner';
import Fixture from '../components/fixtures';
import Script from 'next/script';
import isYesterday from 'date-fns/isYesterday';
import isToday from 'date-fns/isToday';



export default function Home({ footballNews, entertainmentNews, politicsNews, internationalNews, latestMovies, premierLeague, laliga }) {
  const { data: trendingData, loading, error } = useQuery(TRENDING);
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

          <div className={styles.news}>


            <DashCard dashPosts={footballNews} title='Football' page='football' type='post' />
            <DashCard dashPosts={latestMovies} title='Latest Movies' page='latest movie' type='movie' />
            <DashCard dashPosts={entertainmentNews} title='Entertainment' page='entertainment' type='post' />
            <DashCard dashPosts={politicsNews} title="Politics" page='politics' type='post' />
          </div>
          <div className={styles.pageRight}>
            {trendingData && <ClientOnly>
              <DashCard dashPosts={trendingData.trending.slice().sort((a, b) => b.trending.filter(d => isYesterday(d) || isToday(d)).length - a.trending.filter(d => isYesterday(d) || isToday(d)).length).slice(0, 10)} title='Trending movies' page='trending' type='movie' />
            </ClientOnly>}
            <DashCard dashPosts={internationalNews} title="International" page='international' type='post' />
            {premierLeague && <div>{premierLeague[0] && <Fixture fixtureData={premierLeague} title='Fixtures' mini={true} />}</div>}
            {premierLeague && <div>{laliga[0] && <Table mini={true} title='Tables' standings={laliga} />}</div>}
          </div>
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
  const { data: footballData } = await client.query({ query: DASH_NEWS, variables: { genre: 'football' } });
  const { data: entertainmentData } = await client.query({ query: DASH_NEWS, variables: { genre: 'entertainment' } });
  const { data: politicsData } = await client.query({ query: DASH_NEWS, variables: { genre: 'politics' } });
  const { data: internationalData } = await client.query({ query: DASH_NEWS, variables: { genre: 'international' } });
  const { data: latestMovieData } = await client.query({ query: LATEST_MOVIES, variables: { pageNumber: '1' } });
  const premierLeagueData = await fetch(`https://football98.p.rapidapi.com/premierleague/fixtures`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": 'football98.p.rapidapi.com',
      "x-rapidapi-key": process.env.REACT_APP_API_KEY
    }
  })

  const laligaData = await fetch(`https://football98.p.rapidapi.com/laliga/table`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": 'football98.p.rapidapi.com',
      "x-rapidapi-key": process.env.REACT_APP_API_KEY
    }
  })

  console.log(laligaData)

  const premierLeague = premierLeagueData.status === 503 ? null : await premierLeagueData.json()
  const laliga = laligaData.status === 503 ? null : await laligaData.json()


  return {
    props: {
      footballNews: footballData.dashNews,
      entertainmentNews: entertainmentData.dashNews,
      politicsNews: politicsData.dashNews,
      internationalNews: internationalData.dashNews,
      latestMovies: latestMovieData.latestMovies,
      premierLeague: premierLeague,
      laliga: laliga
    },

  };
}
