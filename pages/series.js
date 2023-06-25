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
        {mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5321&reqin=iframe&w=320&h=50&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '320px', height: '50px' }}></iframe></div>}
      </ClientOnly>

      <ClientOnly>
        {mobileBanner && <div className="ads"><iframe src="https://cybertronads.com/platform/show.php?z=-1&pl=2255" width="320" height="50" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe></div>}
      </ClientOnly>

      <ClientOnly>
        {!mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5310&reqin=iframe&w=728&h=90&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '728px', height: '90px' }}></iframe></div>}
      </ClientOnly>

      <ClientOnly>
        {!mobileBanner && <div className="ads"><iframe src="https://cybertronads.com/platform/show.php?z=-1&pl=2254" width="728" height="90" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe></div>}
      </ClientOnly>

      <MovieDisplay latestMovies={latestSeries} trending={trendingSeries} type='series' actionMovies={actionMovies} drama={drama} crime={crime} />

      <ClientOnly>
        {mobileBanner && <div className="ads"><iframe src="https://cybertronads.com/platform/show.php?z=-1&pl=2256" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>
        </div>}
      </ClientOnly>

      <ClientOnly>
        {!mobileBanner && <div className="ads"><iframe data-aa='2226997' src='//ad.a-ads.com/2226997?size=728x90' style={{ width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}
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