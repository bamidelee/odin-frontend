import { useState } from "react";
import styles from '../../styles/movieDisplay.module.css'
import ClientOnly from '../Clientonly'
import Carosel from './carosel'
import Image from 'next/image'
import Link from "next/link";
import { useQuery } from "@apollo/client"
import { TRENDING } from "../quarries";
import isYesterday from 'date-fns/isYesterday'
import isToday from "date-fns/isToday";

export default function MovieDisplay({ latestMovies, comedyMovies, horrorMovies, actionMovies }) {
  const [randomLatestMovie,] = useState(latestMovies[Math.floor(Math.random() * latestMovies.length)])
  const { data: trendingData, loading, error } = useQuery(TRENDING);
  
  return (
    <div className={styles.movieDisplay}>
      <ClientOnly>
        <Link href={`movies/${randomLatestMovie._id}`}>
          <header className={styles.moviesHeader}>
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
        <Carosel movies={latestMovies} title='Latest' latestMovie={true} />
      </ClientOnly>
      {trendingData && <ClientOnly>
        <Carosel movies={trendingData.trending.slice().sort((a, b) => b.trending.filter(d => isYesterday(d) || isToday(d)).length - a.trending.filter(d => isYesterday(d) || isToday(d)).length).slice(0, 10)} title='Trending' trending={true} />
      </ClientOnly>}
      <ClientOnly>
        <Carosel movies={comedyMovies} title='Comedy' />
      </ClientOnly>
      <ClientOnly>
        <Carosel movies={horrorMovies} title='Horror' />
      </ClientOnly>
      <ClientOnly>
        <Carosel movies={actionMovies} title='Action' />
      </ClientOnly>


    </div>
  )
}