import { NEWS_PAGE } from "../../components/quarries"
import client from "../../apollo-client";
import { useRouter } from 'next/router'
import PostCard from '../../components/postCard'


export default function News({news}){
  const router = useRouter()
  const { param } = router.query
    return(
        <div>
           <PostCard news={news} title={param[0]} page = {param[1]}/>
        </div>
    )
    
}

export async function getStaticProps({params}) {
  const {param} = params
    const { data } = await client.query({query: NEWS_PAGE, variables: {genre: param[0], pageNumber:param[1]}});

    if (data.newsPage.length < 1) {
      return {
        redirect: {
          destination: `/page/${param[0]}/0`,
          permanent: false,
        },
      }
    }
    return {
      props: {
        news: data.newsPage,
      
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
