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
      {mobileBanner && <div className="ads"><iframe data-aa='2226984' src='//ad.a-ads.com/2226984?size=320x100' style={{ width: '320px', height: '100px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}

      {!mobileBanner && <div className="ads"><iframe data-aa='2226990' src='//ad.a-ads.com/2226990?size=728x90' style={{ width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}

      <MovieDisplay latestMovies={latestSeries} trending={trendingSeries} type='series' actionMovies={actionMovies} drama={drama} crime={crime} />

      {mobileBanner && <div className="ads"><iframe ddata-aa='2226993' src='//ad.a-ads.com/2226993?size=336x280' style={{ width: '336px', height: '280px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}

      {!mobileBanner && <div className="ads"><iframe data-aa='2226997' src='//ad.a-ads.com/2226997?size=728x90' style={{ width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}

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