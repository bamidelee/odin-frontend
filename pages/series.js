import { LATEST_SERIES, TRENDING_SERIES, NEWS_PAGE } from "../components/quarries";
import { useState, useEffect } from "react";
import client from "../apollo-client";
import MovieDisplay from "../components/movie/movieDisplay";
import styles from '../styles/movie.module.css'

import Script from "next/script";
import ClientOnly from "../components/Clientonly";



export default function Movies({ latestSeries, trendingSeries, actionMovies, drama, crime, comedyMovies, sciFi }) {
  const [mobileBanner, setMobileBanner] = useState(false)

  useEffect(() => {

    if (window.innerWidth < 650) {
      setMobileBanner(true)
    }
  }, [])


  return (
    <div >
      <ClientOnly>
        {mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5320&reqin=iframe&w=300&h=250&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '300px', height: '250px' }}></iframe></div>}
      </ClientOnly>

      <ClientOnly>
        {!mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5310&reqin=iframe&w=728&h=90&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '728px', height: '90px' }}></iframe></div>}
      </ClientOnly>


      <MovieDisplay latestMovies={latestSeries} trending={trendingSeries} type='series' actionMovies={actionMovies} drama={drama} crime={crime} comedyMovies={comedyMovies} sciFi={sciFi}/>

      <ClientOnly>
        {mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5320&reqin=iframe&w=300&h=250&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '300px', height: '250px' }}></iframe></div>}
      </ClientOnly>

      <ClientOnly>
        {!mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5310&reqin=iframe&w=728&h=90&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '728px', height: '90px' }}></iframe></div>}
      </ClientOnly>


    </div>
  )

}


export async function getStaticProps() {
  const { data: latestSeriesData } = await client.query({ query: LATEST_SERIES, variables: { pageNumber: '1' } });
  const { data: dramaData } = await client.query({ query: NEWS_PAGE, variables: { genre: "drama", pageNumber: "1", type: "series" } });
  const { data: comedyData } = await client.query({ query: NEWS_PAGE, variables: { genre: "comedy", pageNumber: "1", type: "series" } });
  const { data: actionData } = await client.query({ query: NEWS_PAGE, variables: { genre: "action", pageNumber: "1", type: "series" } });
  const { data: trendingData } = await client.query({ query: TRENDING_SERIES });
  const { data: crimeData } = await client.query({ query: NEWS_PAGE, variables: { genre: "crime", pageNumber: "1", type: "series" } });
  const { data: sciFiData } = await client.query({ query: NEWS_PAGE, variables: { genre: "science fiction", pageNumber: "1", type: "series" } });


  return {
    props: {

      latestSeries: latestSeriesData.latestSeries,
      drama: dramaData.newsPage,
      comedyMovies: comedyData.newsPage,
      actionMovies: actionData.newsPage,
      trendingSeries: trendingData.trendingSeries,
      crime: crimeData.newsPage,
      sciFi: sciFiData.newsPage

    },

  };
}