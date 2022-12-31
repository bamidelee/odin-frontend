import { ALL_FOOTBALL } from "../components/quarries";
import client from "../apollo-client";
import Image from 'next/image'
import PostCard from "../components/postCard";


export default function FootballNews({news}){

    return(
        <div>
           <PostCard news={news.slice().reverse()} title='Football'/>
        </div>
    )
    
}

export async function getStaticProps() {
    const { data: footballData } = await client.query({query: ALL_FOOTBALL});
    return {
      props: {
        news: footballData.allFootball,
      
      },
   };
  }
