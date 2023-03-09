import { LATEST_MOVIES, TRENDING } from "../components/quarries";
import { useState, useEffect } from "react";
import client from "../apollo-client";
import MovieDisplay from "../components/movie/movieDisplay";
import styles from '../styles/movie.module.css'
import BoxBanner from '../components/boxBanner'



export default function Movies ({latestMovies}){
    const [mobileBanner, setMobileBanner] = useState(false)

    useEffect(() => {
     
      if(window.innerWidth < 650){
        setMobileBanner(true)
      }
    },[])

    
    return(
        <div className={styles.movieView}>
             {mobileBanner && <BoxBanner/>}
          <MovieDisplay latestMovies = {latestMovies} />
        </div>
    )

}


export async function getStaticProps() {
    const { data: latestMovieData } = await client.query({query: LATEST_MOVIES, variables: {pageNumber: '1'}});
 
        return {
        props: {
        
            latestMovies: latestMovieData.latestMovies,
          
        },
        revalidate: 60 * 60 * 60 * 2
    };
}