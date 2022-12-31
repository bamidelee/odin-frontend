import { FIND_POST } from "../../components/quarries";
import NewsDetails from "../../components/newsDetails";
import client from "../../apollo-client";


export default  function Post({news}){

 
    return(
       <div>
        <NewsDetails news={news}/>
       </div>
    )
}

export async function getStaticProps({params}) {
    
    const { id } = params
    const { data } = await client.query({query: FIND_POST, variables: {id: id}});
    return {
      props: {
        news: data.findPost,
      },
   };
  }

  export async function getStaticPaths() {
    return {
      paths: [],
      fallback: 'blocking', // can also be true or 'blocking'
    }
  }