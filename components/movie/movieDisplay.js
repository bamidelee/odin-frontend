import { useState } from "react";
import styles from '../../styles/movieDisplay.module.css'
import ClientOnly from '../Clientonly'
import Carosel from './carosel'
import Image from 'next/image'
import Link from "next/link";
import { useQuery } from "@apollo/client"
import { TRENDING, TRENDING_SERIES } from "../quarries";
import isYesterday from 'date-fns/isYesterday'
import isToday from "date-fns/isToday";

export default function MovieDisplay({ latestMovies, comedyMovies, horrorMovies, actionMovies, type, trending, romance, sciFi, southKorea }) {
  const [randomLatestMovie,] = useState(latestMovies[Math.floor(Math.random() * latestMovies.length)])



  return (
    <div className={styles.movieDisplay}>
      <ClientOnly>
        <Link href={randomLatestMovie.type === 'movie' ? `movies/${randomLatestMovie.postID}` : `series/${randomLatestMovie.postID}`}>
          <header className={styles.moviesHeader}>
            <div className={styles.fade}></div>
            <div className={styles.headerDetails}>
              <h1>
                {randomLatestMovie.title}
              </h1>
              <p>
                {randomLatestMovie.description}
              </p>
            </div>
            <div className={styles.headerImage}>
              <Image src={randomLatestMovie.primaryMedia} alt={randomLatestMovie.title} fill priority
                sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 100vw,
                    100vw"/>
            </div>

          </header>
        </Link>
      </ClientOnly>
      <ClientOnly>
        <Carosel movies={latestMovies} title='Latest' latestMovie={type === 'movies' && true} latestSeries={type === 'series' && true} type={type} />
      </ClientOnly>

      {trending && <ClientOnly>
        <Carosel movies={trending} title='Trending' trending={true} type={type} autoPlay={true} />
      </ClientOnly>}

      {comedyMovies && <ClientOnly>
        <Carosel movies={comedyMovies} title='Comedy' type={type} />
      </ClientOnly>}
      {horrorMovies && <ClientOnly>
        <Carosel movies={horrorMovies} title='Horror' type={type} />
      </ClientOnly>}

      {actionMovies && <ClientOnly>
        <Carosel movies={actionMovies} title='Action' type={type} />
      </ClientOnly>}

      {romance && <ClientOnly>
        <Carosel movies={romance} title='Romance' type={type} />
      </ClientOnly>}

      {sciFi && <ClientOnly>
        <Carosel movies={sciFi} title='Science fiction' type={type} />
      </ClientOnly>}

      {/*southKorea && <ClientOnly>
        <Carosel movies={southKorea} title='South korea' type={type} />
      </ClientOnly>*/}


    </div>
  )
}