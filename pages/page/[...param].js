import { NEWS_PAGE, LATEST_MOVIES, PAGE_COUNT} from "../../components/quarries"
import client from "../../apollo-client";
import { useRouter } from 'next/router'
import PostCard from '../../components/postCard'


export default function News({news, latestMovies, pageCount}){
  const router = useRouter()
  const { param } = router.query
    return(
        <div>
           <PostCard news={param[2] === 'post' ? news : latestMovies} title={param[0]} page = {param[1]} type = {param[2]} pageCount = {pageCount}/>
        </div>
    )
    
}

export async function getStaticProps({params}) {
  const {param} = params
 
    const { data } = await client.query({query: NEWS_PAGE, variables: {genre: param[0], pageNumber:param[1], type: param[2]}});
    const { data: latestMovieData } =await client.query({query: LATEST_MOVIES, variables: {pageNumber: param[1]}});
    const { data: pageCountData } = await client.query({query: PAGE_COUNT, variables: {genre: param[0], type: param[2]}});
   
    return {
      props: {
        news: data ? data.newsPage : null,
        latestMovies: latestMovieData ? latestMovieData.latestMovies: null,
        pageCount: pageCountData.pageCount.count
      
      },
      revalidate: 60 * 60 * 60 * 6
   };
  }

  export async function getStaticPaths() {
    return {
      paths: [],
      fallback: 'blocking', // can also be true or 'blocking'
    }
  }
