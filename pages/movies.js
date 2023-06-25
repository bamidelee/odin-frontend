import { LATEST_MOVIES, TRENDING, NEWS_PAGE, FIND_CONTENT_BY_COUNTRY } from "../components/quarries";
import { useState, useEffect } from "react";
import client from "../apollo-client";
import MovieDisplay from "../components/movie/movieDisplay";
import styles from '../styles/movie.module.css'

import Script from "next/script";
import ClientOnly from "../components/Clientonly";



export default function Movies({ latestMovies, comedyMovies, horrorMovies, actionMovies, trending, romanceMovies, sciFiMovies, southKorea, bollywood }) {
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


      <MovieDisplay latestMovies={latestMovies} comedyMovies={comedyMovies} horrorMovies={horrorMovies} actionMovies={actionMovies} trending={trending} type='movies' romance={romanceMovies} sciFi={sciFiMovies} southKorea={southKorea} bollywood={bollywood} />

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
  const { data: latestMovieData } = await client.query({ query: LATEST_MOVIES, variables: { pageNumber: '1' } });
  const { data: comedyData } = await client.query({ query: NEWS_PAGE, variables: { genre: "comedy", pageNumber: "1", type: "movie" } });
  const { data: horrorData } = await client.query({ query: NEWS_PAGE, variables: { genre: "horror", pageNumber: "1", type: "movie" } });
  const { data: actionData } = await client.query({ query: NEWS_PAGE, variables: { genre: "action", pageNumber: "1", type: "movie" } });
  const { data: trendingData } = await client.query({ query: TRENDING });
  const { data: romanceData } = await client.query({ query: NEWS_PAGE, variables: { genre: "romance", pageNumber: "1", type: "movie" } });
  const { data: sciFiData } = await client.query({ query: NEWS_PAGE, variables: { genre: "science fiction", pageNumber: "1", type: "movie" } });
  const { data: southKoreaData } = await client.query({ query: FIND_CONTENT_BY_COUNTRY, variables: { country: "south korea", pageNumber: "1" } });
  const { data: bollywoodData } = await client.query({ query: FIND_CONTENT_BY_COUNTRY, variables: { country: "bollywood", pageNumber: "1" } });


  return {
    props: {

      latestMovies: latestMovieData.latestMovies,
      comedyMovies: comedyData.newsPage,
      horrorMovies: horrorData.newsPage,
      actionMovies: actionData.newsPage,
      trending: trendingData.trending,
      romanceMovies: romanceData.newsPage,
      sciFiMovies: sciFiData.newsPage,
      southKorea: southKoreaData.findContentByCountry,
      bollywood: bollywoodData.findContentByCountry

    },

  };
}