import { NEWS_PAGE, LATEST_MOVIES, PAGE_COUNT, MOVIE_COUNT, LATEST_SERIES, LATEST_SERIES_COUNT, FIND_CONTENT_BY_COUNTRY, COUNTRY_COUNT } from "../../components/quarries"
import client from "../../apollo-client";
import { useRouter } from 'next/router'
import PostCard from '../../components/postCard'

import { useEffect, useState } from 'react';

import Script from "next/script";
import ClientOnly from "../../components/Clientonly";



export default function News({ news, latestMovies, pageCount, latestMoviesCount, latestSeries, latestSeriesCount, country, countryCount }) {
  const [mobileBanner, setMobileBanner] = useState(false)

  useEffect(() => {

    if (window.innerWidth < 650) {
      setMobileBanner(true)
    }
  }, [])
  const router = useRouter()
  const { param } = router.query
  return (
    <div>
      <ClientOnly>
        {mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5320&reqin=iframe&w=300&h=250&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '300px', height: '250px' }}></iframe></div>}
      </ClientOnly>

      <ClientOnly>
        {!mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5310&reqin=iframe&w=728&h=90&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '728px', height: '90px' }}></iframe></div>}
      </ClientOnly>

      <PostCard news={param[2] === 'latestMovies' ? latestMovies : param[2] === 'latestSeries' ? latestSeries : param[3] === 'country' ? country : news} title={param[0]} page={param[1]} type={param[2]} pageCount={param[2] == 'latestMovies' ? latestMoviesCount : param[2] === 'latestSeries' ? latestSeriesCount : param[3] ==='country' ? countryCount : pageCount} pageLink={(param[2] === 'latestMovies' || param[2] === 'movie') ? 'movies' : 'series'} countryName={param[3]} />

      <ClientOnly>
        {mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5320&reqin=iframe&w=300&h=250&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '300px', height: '250px' }}></iframe></div>}
      </ClientOnly>

      <ClientOnly>
        {!mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5310&reqin=iframe&w=728&h=90&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '728px', height: '90px' }}></iframe></div>}
      </ClientOnly>

    </div>
  )

}

export async function getStaticProps({ params }) {
  const { param } = params

  const { data } = await client.query({ query: NEWS_PAGE, variables: { genre: param[0], pageNumber: param[1], type: param[2] } });
  const { data: latestMovieData } = await client.query({ query: LATEST_MOVIES, variables: { pageNumber: param[1] } });
  const { data: latestSeriesData } = await client.query({ query: LATEST_SERIES, variables: { pageNumber: param[1] } });
  const { data: pageCountData } = await client.query({ query: PAGE_COUNT, variables: { genre: param[0], type: param[2] } });
  const { data: movieCountData } = await client.query({ query: MOVIE_COUNT });
  const { data: seriesCountData } = await client.query({ query: LATEST_SERIES_COUNT });
  const { data: countryData } = await client.query({ query: FIND_CONTENT_BY_COUNTRY, variables: { country: param[0], pageNumber: param[1] } });
  const { data: countryCountData } = await client.query({ query: COUNTRY_COUNT, variables: { country: param[0] } });

  return {
    props: {
      news: data ? data.newsPage : null,
      latestMovies: latestMovieData ? latestMovieData.latestMovies : null,
      pageCount: pageCountData.pageCount.count,
      latestMoviesCount: movieCountData.latestMoviesCount.count,
      latestSeries: latestSeriesData.latestSeries,
      latestSeriesCount: seriesCountData.latestSeriesCount.count,
      country: countryData.findContentByCountry,
      countryCount: countryCountData.countryCount.count

    },

  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking', // can also be true or 'blocking'
  }
}
