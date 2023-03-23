import Head from 'next/head'
import DashCard from '../components/dashCard';
import styles from '../styles/Home.module.css'
import client from "../apollo-client";
import { DASHPOST, TABLE, FIXTURE, DASH_NEWS, LATEST_MOVIES, TRENDING } from "../components/quarries";
import { gql } from "@apollo/client";
import { useEffect, useState } from 'react';
import Table from '../components/tables'
import Carousel from '../components/carousel';

import ClientOnly from '../components/Clientonly';
import { useQuery } from "@apollo/client"
import Banner from '../components/banner';
import Fixture from '../components/fixtures';
import Script from 'next/script';


export default function Home({footballNews, entertainmentNews, politicsNews, internationalNews, latestMovies, premierLeague, laliga}) {
  const { data: trendingData, loading, error } = useQuery(TRENDING);
  const [mobileBanner, setMobileBanner] = useState(false)

  useEffect(() => {
   
    if(window.innerWidth < 650){
      setMobileBanner(true)
    }
  },[])

  return (
    <>
      <Head>
        <title>Naijaodin</title>
        <meta name="description" content="blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
       <div className={styles.news}>
        
          {mobileBanner && <ClientOnly><Banner/></ClientOnly>}
         <DashCard dashPosts={footballNews} title='Football' page='football' type='post'/>
         <DashCard dashPosts={latestMovies} title = 'Latest Movies' page = 'latest movie' type = 'movie'/>
         <DashCard dashPosts={entertainmentNews} title='Entertainment' page='entertainment' type='post'/>
         <DashCard dashPosts={politicsNews} title="Politics" page='politics' type='post'/>
         <DashCard dashPosts={internationalNews} title= "International" page='international' type='post'/>
      
       </div>
        <div className={styles.pageRight}>
      {mobileBanner &&  <div>
                    <Script
                    async
                    type="application/javascript" src="https://a.exdynsrv.com/ad-provider.js"
                    strategy="afterInteractive"
                    />
                        { <div className="ads"><ins class="adsbyexoclick" data-zoneid="4935076"></ins> </div>}
                    
                    <Script id='banner3'>{`(AdProvider = window.AdProvider || []).push({"serve": {}});`}</Script>
                  </div>}
       {trendingData && <ClientOnly>
          <DashCard dashPosts={trendingData.trending.slice().sort((a,b) => b.trending.length - a.trending.length).slice(0,10)} title='Trending movies' page='trending' type='movie'/>
        </ClientOnly>}
       {premierLeague &&<div>
         {premierLeague[0] && <Fixture fixtureData={premierLeague} title = 'Fixtures' mini= {true}/>}
           {laliga[0] && <Table mini = {true} title = 'Tables' standings = {laliga}/>}
       </div>}
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
  const { data: latestMovieData } = await client.query({query: LATEST_MOVIES, variables: {pageNumber: '1'}});
  const premierLeagueData =await fetch(`https://football98.p.rapidapi.com/premierleague/fixtures`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": 'football98.p.rapidapi.com',
      "x-rapidapi-key":process.env.REACT_APP_API_KEY 
    }
  })

  const laligaData = fetch(`https://football98.p.rapidapi.com/laliga/table`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": 'football98.p.rapidapi.com',
      "x-rapidapi-key":process.env.REACT_APP_API_KEY 
    }
  })

  const premierLeague = premierLeagueData.status ===503 ?null:await premierLeagueData.json()
  const laliga =premierLeagueData.status === 503? null :await  laligaData.json()
  

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
