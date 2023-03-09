import { LATEST_MOVIES, TRENDING } from "../components/quarries";
import { useState } from "react";
import client from "../apollo-client";
import MovieDisplay from "../components/movie/movieDisplay";
import styles from '../styles/movie.module.css'


export default function Movies ({latestMovies, trending}){
    
    return(
        <div className={styles.movieView}>
          <MovieDisplay latestMovies = {latestMovies} trending = {trending}/>
        </div>
    )

}


export async function getStaticProps() {
    const { data: latestMovieData } = await client.query({query: LATEST_MOVIES, variables: {pageNumber: '1'}});
    const { data: trendingMovieData } = await client.query({query: TRENDING, variables: {type: 'movie'}});
 
        return {
        props: {
        
            latestMovies: latestMovieData.latestMovies,
            trending: trendingMovieData.trending
        },
        revalidate: 60 * 60 * 60 * 2
    };
}