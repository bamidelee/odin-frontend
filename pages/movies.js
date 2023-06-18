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
               {  <div className="ads"><iframe  data-aa='2227065' src='//acceptable.a-ads.com/2227065' style={{width:'100%', height:'100%', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe></div>}
            </ClientOnly>
           

      <MovieDisplay latestMovies={latestMovies} comedyMovies={comedyMovies} horrorMovies={horrorMovies} actionMovies={actionMovies} trending={trending} type='movies' romance={romanceMovies} sciFi={sciFiMovies} southKorea={southKorea} bollywood={bollywood} />
   
      <ClientOnly>
               {  <div className="ads"><iframe  data-aa='2227065' src='//acceptable.a-ads.com/2227065' style={{width:'100%', height:'100%', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe></div>}
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