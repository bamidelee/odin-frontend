import Image from 'next/image'
import styles from '../../styles/moviePreview.module.css'
import format from 'date-fns/format'
import YouTube from 'react-youtube';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CREATE_TREND } from '../quarries';
import { useMutation } from '@apollo/client';

export default function MoviePreview ({movie}){
    const [hasMounted, setHasMounted] = useState(false);
    const [createTrend, { data, loading, error }] = useMutation(CREATE_TREND);

    useEffect(() => {
         createTrend({variables: {id: movie._id}})
    },[])

    
    return (
        <div className={styles.moviePreview}>
               <div className={styles.previewHeader}>
                   <div className={styles.movieImageContainer}>
                       <Image src={movie.primaryMedia} alt={movie.title} fill priority
                        sizes="(max-width: 768px) 50vw,
                        (max-width: 1200px) 100vw,
                        100vw"/>
                   </div>
                   <div className={styles.previewRight}>
                       <h2>{movie.title}</h2>
                       <h3>Genre</h3>
                       <p>
                        {movie.genre.map(genre => <span key={genre}>{genre} / </span> )}
                       </p>
                       <h3>Director</h3>
                       <p>{movie.director}</p>
                       <h3>Stars</h3>
                       <p className={styles.stars}> 
                        {movie.stars.map(genre => <span key={genre}>{genre} / </span> )}
                       </p>
                       <h3>Realese date</h3>
                       <p>{format(new Date(movie.releaseDate), 'MM/dd/yyyy')}</p>
                       <h3>Language</h3>
                       <p>{movie.language}</p>
                   </div>
                  
               </div>
               <div className={styles.description}>
                       <h3>Description</h3>
                       <p>{movie.description}</p>
                   </div>

                {movie.trailer && <div className={styles.trailer}>
                    <h3>Trailer</h3>
                    <YouTube videoId={movie.trailer}/>
                    </div>}

                    <div className={styles.download}>
                        <h3>Download links:</h3>
                        <p>
                            {movie.secondaryMedia.split(',').map((link, i) => <Link href={link} key={i}>Server{i + 1}</Link>)}
                        </p>
                    </div>
        </div>
    )
}


