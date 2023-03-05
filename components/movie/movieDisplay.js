import { useState } from "react";
import styles from '../../styles/movieDisplay.module.css'
import ClientOnly from '../Clientonly'
import Carousel from './carosel'


export default function MovieDisplay ({latestMovies}){
    const [randomLatestMovie, ] = useState(latestMovies[Math.floor(Math.random() * latestMovies.length)])
    return(
        <div>
            <ClientOnly>
              <header style={{backgroundImage:`url(${randomLatestMovie.primaryMedia})`}} className = {styles.moviesHeader}>
                    
                    <div className={styles.headerDetails}>
                      <h1>
                        {randomLatestMovie.title}
                      </h1>
                      <p>
                        {randomLatestMovie.description}
                      </p>
                    </div>
                  </header>
            </ClientOnly>
            <ClientOnly>
              <Carousel movies = {latestMovies} title= 'Latest'/>
            </ClientOnly>
        </div>
    )
}