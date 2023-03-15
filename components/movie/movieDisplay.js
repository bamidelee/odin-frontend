import { useState } from "react";
import styles from '../../styles/movieDisplay.module.css'
import ClientOnly from '../Clientonly'
import Carosel from './carosel'
import Image from 'next/image'
import Link from "next/link";
import { useQuery } from "@apollo/client"
import { TRENDING } from "../quarries";

export default function MovieDisplay ({latestMovies, comedyMovies, thrillerMovies}){
    const [randomLatestMovie, ] = useState(latestMovies[Math.floor(Math.random() * latestMovies.length)])
    const { data: trendingData, loading, error } = useQuery(TRENDING);
    return(
        <div>
            <ClientOnly>
              <Link href = {`movies/${randomLatestMovie._id}`}>
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
              <Carosel movies = {latestMovies} title= 'Latest' latestMovie={true}/>
            </ClientOnly>
           {trendingData && <ClientOnly>
              <Carosel movies = {trendingData.trending.slice(0,10).sort((a,b) => b.trending.length - a.trending.length)} title= 'Trending' trending= {true}/>
            </ClientOnly>}
            <ClientOnly>
              <Carosel movies = {comedyMovies} title= 'Comedy'/>
            </ClientOnly>
            <ClientOnly>
              <Carosel movies = {thrillerMovies} title= 'Thriller'/>
            </ClientOnly>

            <div className={styles.gift}>MTN: 9922-3310-3503-12407</div>
            <div className={styles.gift}>GLO: 34737-30345-13672-</div>
            <div className={styles.gift}>AIRTEL: 1085-5949-8819-6212</div>
            
        </div>
    )
}