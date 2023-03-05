import { useState } from "react";
import styles from '../../styles/movieDisplay.module.css'
import ClientOnly from '../Clientonly'
import Carousel from './carosel'
import Image from 'next/image'
import Link from "next/link";

export default function MovieDisplay ({latestMovies}){
    const [randomLatestMovie, ] = useState(latestMovies[Math.floor(Math.random() * latestMovies.length)])
    return(
        <div>
            <ClientOnly>
              <Link href = {`/movie/${randomLatestMovie._id}`} replace>
                <header  className = {styles.moviesHeader}>
                <Image src={randomLatestMovie.primaryMedia} alt={randomLatestMovie.title} fill priority
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"/>
                      <div className={styles.headerDetails}>
                        <h1>
                          {randomLatestMovie.title}
                        </h1>
                        <p>
                          {randomLatestMovie.description}
                        </p>
                      </div>
                    </header>
              </Link>
            </ClientOnly>
            <ClientOnly>
              <Carousel movies = {latestMovies} title= 'Latest'/>
            </ClientOnly>
        </div>
    )
}