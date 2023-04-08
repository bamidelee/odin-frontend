import { NEWS_PAGE, LATEST_MOVIES, PAGE_COUNT, MOVIE_COUNT } from "../../components/quarries"
import client from "../../apollo-client";
import { useRouter } from 'next/router'
import PostCard from '../../components/postCard'
import BoxBanner from '../../components/boxBanner'
import { useEffect, useState } from 'react';
import Banner from "../../components/banner";
import Script from "next/script";
import ClientOnly from "../../components/Clientonly";



export default function News({ news, latestMovies, pageCount, latestMoviesCount }) {
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
        <Banner slot={mobileBanner ? '1523ac683e9630ccc8aba4793a81d92b' : '8c47067f1ac7389ef98d7ba0c597c9d9'} />
      </ClientOnly>

      <PostCard news={param[2] ? news : latestMovies} title={param[0]} page={param[1]} type={param[2]} pageCount={param[2] ? pageCount : latestMoviesCount} />
      {!mobileBanner && <div>
        <Script async="async" data-cfasync="false" src="//pl18660884.highrevenuegate.com/1e845c512aba6f843b89be278fa82a95/invoke.js"></Script>
        <div id="container-1e845c512aba6f843b89be278fa82a95"></div>
      </div>}

      {mobileBanner && <Banner slot='1d24a5888bd79927cba80711f10c599a' />
      }

    </div>
  )

}

export async function getStaticProps({ params }) {
  const { param } = params

  const { data } = await client.query({ query: NEWS_PAGE, variables: { genre: param[0], pageNumber: param[1], type: param[2] } });
  const { data: latestMovieData } = await client.query({ query: LATEST_MOVIES, variables: { pageNumber: param[1] } });
  const { data: pageCountData } = await client.query({ query: PAGE_COUNT, variables: { genre: param[0], type: param[2] } });
  const { data: movieCountData } = await client.query({ query: MOVIE_COUNT });

  return {
    props: {
      news: data ? data.newsPage : null,
      latestMovies: latestMovieData ? latestMovieData.latestMovies : null,
      pageCount: pageCountData.pageCount.count,
      latestMoviesCount: movieCountData.latestMoviesCount.count

    },

  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking', // can also be true or 'blocking'
  }
}
