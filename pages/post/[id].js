import { FIND_POST, RELATED_POST } from "../../components/quarries";
import NewsDetails from "../../components/newsDetails";
import client from "../../apollo-client";
import RelatedNews from "../../components/relatedNews";
import { useRouter } from 'next/router'
import styles from '../../styles/newsDetails.module.css'



export default  function Post({news, relatedNews}){
  const router = useRouter()
  const { id } = router.query
    return(
       <div className={styles.details}>
        <NewsDetails news={news}/>
        <RelatedNews news={relatedNews.filter(news => news._id !== id)}/>
       </div>
    )
}

export async function getStaticProps({params}) {
    
    const { id } = params
    const { data } = await client.query({query: FIND_POST, variables: {id: id}});
    const {data: relatedNews} = await client.query({query: RELATED_POST, variables:{genre: data.findPost.genre[1]} })

    if (!data.findPost) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        news: data.findPost,
        relatedNews: relatedNews.relatedPost
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