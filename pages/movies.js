import { LATEST_MOVIES } from "../components/quarries";
import { useState } from "react";
import client from "../apollo-client";
import MovieDisplay from "../components/movie/movieDisplay";


export default function Movies ({latestMovies}){
    
    return(
        <div>
          <MovieDisplay latestMovies = {latestMovies}/>
        </div>
    )

}









export async function getStaticProps() {
    const { data: latestMovieData } = await client.query({query: LATEST_MOVIES, variables: {pageNumber: '1'}});
        return {
        props: {
        
            latestMovies: latestMovieData.latestMovies
        },
        revalidate: 60 * 60 * 60 * 6
    };
}