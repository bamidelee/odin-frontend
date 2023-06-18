import { LATEST_SERIES, TRENDING_SERIES, NEWS_PAGE } from "../components/quarries";
import { useState, useEffect } from "react";
import client from "../apollo-client";
import MovieDisplay from "../components/movie/movieDisplay";
import styles from '../styles/movie.module.css'

import Script from "next/script";
import ClientOnly from "../components/Clientonly";



export default function Movies({ latestSeries, trendingSeries, actionMovies, drama, crime }) {
  const [mobileBanner, setMobileBanner] = useState(false)

  useEffect(() => {

    if (window.innerWidth < 650) {
      setMobileBanner(true)
    }
  }, [])


  return (
    <div >
     <ClientOnly>
               {  <div className="ads"><iframe  data-aa='2227065' src='//acceptable.a-ads.com/2227065' style={{width:'100%', height:'100%', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe></div>}
            </ClientOnly>
            
      <MovieDisplay latestMovies={latestSeries} trending={trendingSeries} type='series' actionMovies={actionMovies} drama={drama} crime={crime} />
      <ClientOnly>
               {  <div className="ads"><iframe  data-aa='2227065' src='//acceptable.a-ads.com/2227065' style={{width:'100%', height:'100%', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe></div>}
            </ClientOnly>
           
    </div>
  )

}


export async function getStaticProps() {
  const { data: latestSeriesData } = await client.query({ query: LATEST_SERIES, variables: { pageNumber: '1' } });
  const { data: dramaData } = await client.query({ query: NEWS_PAGE, variables: { genre: "drama", pageNumber: "1", type: "series" } });
  // const { data: horrorData } = await client.query({ query: NEWS_PAGE, variables: { genre: "horror", pageNumber: "1", type: "movie" } });
  const { data: actionData } = await client.query({ query: NEWS_PAGE, variables: { genre: "action", pageNumber: "1", type: "series" } });
  const { data: trendingData } = await client.query({ query: TRENDING_SERIES });
  const { data: crimeData } = await client.query({ query: NEWS_PAGE, variables: { genre: "crime", pageNumber: "1", type: "series" } });


  return {
    props: {

      latestSeries: latestSeriesData.latestSeries,
      drama: dramaData.newsPage,
      // horrorMovies: horrorData.newsPage,
      actionMovies: actionData.newsPage,
      trendingSeries: trendingData.trendingSeries,
      crime: crimeData.newsPage

    },

  };
}