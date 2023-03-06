import MoviePreview from "../../components/movie/moviePreview";
import { FIND_MOVIE } from '../../components/quarries';
import client from "../../apollo-client";

export default function Preview({movie}) {

    return(
        <div>
            <MoviePreview movie = {movie}/>

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
        revalidate: 60 * 60 * 60 * 6
    };
}

export async function getStaticPaths() {
    return {
      paths: [],
      fallback: 'blocking', // can also be true or 'blocking'
    }
  }
