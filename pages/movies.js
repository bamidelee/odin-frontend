import { LATEST_MOVIES, TRENDING, NEWS_PAGE } from "../components/quarries";
import { useState, useEffect } from "react";
import client from "../apollo-client";
import MovieDisplay from "../components/movie/movieDisplay";
import styles from '../styles/movie.module.css'
import BoxBanner from '../components/boxBanner'



export default function Movies ({latestMovies, comedyMovies, horrorMovies, actionMovies}){
    const [mobileBanner, setMobileBanner] = useState(false)

    useEffect(() => {
     
      if(window.innerWidth < 650){
        setMobileBanner(true)
      }
    },[])

    
    return(
        <div className={styles.movieView}>
             {mobileBanner && <BoxBanner/>}
          <MovieDisplay latestMovies = {latestMovies} comedyMovies = {comedyMovies} horrorMovies = {horrorMovies} actionMovies = {actionMovies} />
        </div>
    )

}


export async function getStaticProps() {
    const { data: latestMovieData } = await client.query({query: LATEST_MOVIES, variables: {pageNumber: '1'}});
    const { data: comedyData } = await client.query({query: NEWS_PAGE, variables: {genre: "comedy", pageNumber:"1", type: "movie"}});
    const { data: horrorData } = await client.query({query: NEWS_PAGE, variables: {genre: "horror", pageNumber:"1", type: "movie"}});
    const { data: actionData } = await client.query({query: NEWS_PAGE, variables: {genre: "action", pageNumber:"1", type: "movie"}});
 
 
        return {
        props: {
        
            latestMovies: latestMovieData.latestMovies,
            comedyMovies: comedyData.newsPage,
            horrorMovies: horrorData.newsPage,
            actionMovies: actionData.newsPage
          
        },
       
    };
}