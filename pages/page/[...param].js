import { NEWS_PAGE, LATEST_MOVIES, PAGE_COUNT, MOVIE_COUNT} from "../../components/quarries"
import client from "../../apollo-client";
import { useRouter } from 'next/router'
import PostCard from '../../components/postCard'
import BoxBanner from '../../components/boxBanner'
import { useEffect, useState } from 'react';



export default function News({news, latestMovies, pageCount, latestMoviesCount}){
  const [mobileBanner, setMobileBanner] = useState(false)
  
    useEffect(() => {
     
      if(window.innerWidth < 650){
        setMobileBanner(true)
      }
    },[])
  const router = useRouter()
  const { param } = router.query
    return(
        <div>
           {mobileBanner && <BoxBanner/>}
           <PostCard news={param[2]  ? news : latestMovies} title={param[0]} page = {param[1]} type = {param[2]} pageCount = {param[2] === 'post'?pageCount : latestMoviesCount}/>
        </div>
    )
    
}

export async function getStaticProps({params}) {
  const {param} = params
 
    const { data } = await client.query({query: NEWS_PAGE, variables: {genre: param[0], pageNumber:param[1], type: param[2]}});
    const { data: latestMovieData } =await client.query({query: LATEST_MOVIES, variables: {pageNumber: param[1]}});
    const { data: pageCountData } = await client.query({query: PAGE_COUNT, variables: {genre: param[0], type: param[2]}});
    const { data: movieCountData } = await client.query({query: MOVIE_COUNT});
 
    return {
      props: {
        news: data ? data.newsPage : null,
        latestMovies: latestMovieData ? latestMovieData.latestMovies: null,
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
