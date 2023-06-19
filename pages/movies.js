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
      {mobileBanner && <div className="ads"><iframe data-aa='2226984' src='//ad.a-ads.com/2226984?size=320x100' style={{ width: '320px', height: '100px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}

      {!mobileBanner && <div className="ads"><iframe data-aa='2226990' src='//ad.a-ads.com/2226990?size=728x90' style={{ width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}


      <MovieDisplay latestMovies={latestMovies} comedyMovies={comedyMovies} horrorMovies={horrorMovies} actionMovies={actionMovies} trending={trending} type='movies' romance={romanceMovies} sciFi={sciFiMovies} southKorea={southKorea} bollywood={bollywood} />

      {mobileBanner && <div className="ads"><iframe ddata-aa='2226993' src='//ad.a-ads.com/2226993?size=336x280' style={{ width: '336px', height: '280px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}

      {!mobileBanner && <div className="ads"><iframe data-aa='2226997' src='//ad.a-ads.com/2226997?size=728x90' style={{ width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}

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