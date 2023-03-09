import Head from 'next/head'
import DashCard from '../components/dashCard';
import styles from '../styles/Home.module.css'
import icon from '../public/titleIcon.png'
import client from "../apollo-client";
import { DASHPOST, TABLE, FIXTURE, DASH_NEWS, LATEST_MOVIES, TRENDING } from "../components/quarries";
import { gql } from "@apollo/client";
import { useEffect, useState } from 'react';
import TableDisplay from '../components/tableDisplay';
import Carousel from '../components/carousel';
import FixturesDisplay from '../components/fixtureDisplay';
import ClientOnly from '../components/Clientonly';
import { useQuery } from "@apollo/client"
import Banner from '../components/banner';
import Script from 'next/script';


export default function Home({footballNews, entertainmentNews, politicsNews, internationalNews, latestMovies}) {
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
        <link rel="icon" href="/titleIcon.png/" />
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
          <DashCard dashPosts={trendingData.trending.slice(0,10).sort((a,b) => b.trending.length - a.trending.length)} title='Trending movies' page='trending' type='movie'/>
        </ClientOnly>}
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
  const { data: footballData } = await client.query({query: DASH_NEWS, variables:{genre: 'football'}});
  const { data: entertainmentData } = await client.query({query: DASH_NEWS, variables:{genre: 'entertainment'}});
  const { data: politicsData } = await client.query({query: DASH_NEWS, variables:{genre: 'politics'}});
  const { data: internationalData } = await client.query({query: DASH_NEWS, variables:{genre: 'international'}});
  const { data: latestMovieData } = await client.query({query: LATEST_MOVIES, variables: {pageNumber: '1'}});
  return {
    props: {
      footballNews: footballData.dashNews,
      entertainmentNews: entertainmentData.dashNews,
      politicsNews: politicsData.dashNews,
      internationalNews: internationalData.dashNews,
      latestMovies: latestMovieData.latestMovies
    },
    revalidate: 60 * 60 * 60 * 2
 };
}
