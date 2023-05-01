import { LATEST_SERIES, TRENDING_SERIES, NEWS_PAGE } from "../components/quarries";
import { useState, useEffect } from "react";
import client from "../apollo-client";
import MovieDisplay from "../components/movie/movieDisplay";
import styles from '../styles/movie.module.css'
import BoxBanner from '../components/boxBanner'
import Banner from "../components/banner";
import Script from "next/script";
import ClientOnly from "../components/Clientonly";



export default function Movies({ latestSeries, trendingSeries, actionMovies }) {
  const [mobileBanner, setMobileBanner] = useState(false)

  useEffect(() => {

    if (window.innerWidth < 650) {
      setMobileBanner(true)
    }
  }, [])


  return (
    <div >
     <ClientOnly>
        <Banner slot={mobileBanner ? '1523ac683e9630ccc8aba4793a81d92b' : '8c47067f1ac7389ef98d7ba0c597c9d9'} />
      </ClientOnly>
      <MovieDisplay latestMovies={latestSeries} trending={trendingSeries} type='series' actionMovies={actionMovies} />
      {!mobileBanner && <ClientOnly>
        <div>
          <Script async="async" data-cfasync="false" src="//pl18660884.highrevenuegate.com/1e845c512aba6f843b89be278fa82a95/invoke.js"></Script>
          <div id="container-1e845c512aba6f843b89be278fa82a95"></div>
        </div>
      </ClientOnly>}

      {mobileBanner && <Banner slot='1d24a5888bd79927cba80711f10c599a' />
      }
    </div>
  )

}


export async function getStaticProps() {
  const { data: latestSeriesData } = await client.query({ query: LATEST_SERIES, variables: { pageNumber: '1' } });
  //const { data: comedyData } = await client.query({ query: NEWS_PAGE, variables: { genre: "comedy", pageNumber: "1", type: "movie" } });
 // const { data: horrorData } = await client.query({ query: NEWS_PAGE, variables: { genre: "horror", pageNumber: "1", type: "movie" } });
  const { data: actionData } = await client.query({ query: NEWS_PAGE, variables: { genre: "action", pageNumber: "1", type: "series" } });
 const { data: trendingData } = await client.query({ query: TRENDING_SERIES });


  return {
    props: {

      latestSeries: latestSeriesData.latestSeries,
      //comedyMovies: comedyData.newsPage,
     // horrorMovies: horrorData.newsPage,
      actionMovies: actionData.newsPage,
      trendingSeries: trendingData.trendingSeries

    },

  };
}