import MoviePreview from "../../components/movie/moviePreview";
import { FIND_MOVIE } from '../../components/quarries';
import ClientOnly from "../../components/Clientonly";
import client from "../../apollo-client";
import BoxBanner from '../../components/boxBanner'
import { useEffect, useState } from 'react';

export default function Preview({movie}) {
    const [mobileBanner, setMobileBanner] = useState(false)

    useEffect(() => {
     
      if(window.innerWidth < 650){
        setMobileBanner(true)
      }
    },[])
    return(
        <div>
            {mobileBanner && <BoxBanner/>}
            <ClientOnly>
                <MoviePreview movie = {movie}/>
            </ClientOnly>

        </div>
    )
}


export async function getStaticProps({params}) {
    const {preview} = params
    const { data } = await client.query({query: FIND_MOVIE, variables: {id : preview }});
        return {
        props: {
        
            movie: data.findMovie
        },
        revalidate: 60 * 60 * 60 * 2
    };
}

export async function getStaticPaths() {
    return {
      paths: [],
      fallback: 'blocking', // can also be true or 'blocking'
    }
  }
