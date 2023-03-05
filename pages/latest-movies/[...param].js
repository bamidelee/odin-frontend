import { NEWS_PAGE, LATEST_MOVIES } from "../../components/quarries"
import client from "../../apollo-client";
import { useRouter } from 'next/router'
import PostCard from '../../components/postCard'


export default function News({news}){
  const router = useRouter()
  const { param } = router.query
    return(
        <div>
           <PostCard news={news} title='Latest movies' page = {param[1]}/>
        </div>
    )
    
}

export async function getStaticProps({params}) {
  const {param} = params
 
    const { data } =await client.query({query: LATEST_MOVIES, variables: {pageNumber: param[0]}});

   
    return {
      props: {
        news: data.latestMovies,
      
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
