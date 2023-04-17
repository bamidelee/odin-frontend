import Image from 'next/image'
import styles from '../../styles/moviePreview.module.css'
import format from 'date-fns/format'
import YouTube from 'react-youtube';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CREATE_TREND } from '../quarries';
import { useMutation } from '@apollo/client';
import Icon from '@mdi/react';
import { mdiArrowCollapseRight } from '@mdi/js';
import { mdiArrowCollapseLeft } from '@mdi/js';


export default function MoviePreview({ movie }) {
    const [hasMounted, setHasMounted] = useState(false);
    const [createTrend, { data, loading, error }] = useMutation(CREATE_TREND);

    useEffect(() => {
        setHasMounted(true)
    }, [])
    useEffect(() => {
        !movie.season && hasMounted && createTrend({ variables: { id: movie._id } })
        if(movie.season){
            movie.episode === '1' && createTrend({ variables: { id: movie._id } })
        }
    }, [hasMounted])

    const mixDrop = movie.secondaryMedia.split(',').find((link) => link.includes("https://mixdrop"))
    const mixDropLink = mixDrop && mixDrop.substring(21)



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
                        {movie.genre.map(genre => <span key={genre}>{genre} / </span>)}
                    </p>
                    {movie.season && <h3>Season</h3>}
                    {movie.season && <p>{movie.season}</p>}
                    {movie.episode && <h3>Episode</h3>}
                    {movie.episode && <p>{movie.episode}</p>}
                    {movie.episodeTitle && <h3>Episode title</h3>}
                    {movie.episodeTitle && <p>{movie.episodeTitle}</p>}
                    <h3>Director</h3>
                    <p>{movie.director}</p>
                    <h3>Stars</h3>
                    <p className={styles.stars}>
                        {movie.stars.map(genre => <span key={genre}>{genre} / </span>)}
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

            {/*movie.trailer && <div className={styles.trailer}>
                <h3>Trailer</h3>
                <YouTube videoId={movie.trailer} />
    </div>*/}
            <div className={styles.note}>
                <h2>Note</h2>
                <p>The stream link might be broken, you can still dowwnload and watch on your local device</p>
            </div>

           {!movie.secondaryMedia.split(',').find((link) => link.includes("https://mixdrop")) && <div className={styles.download}>
                <h3>Download links:</h3>
                <p>
                    {movie.secondaryMedia.split(',').map((link, i) => <Link href={link} key={i}>Server{i + 1}</Link>)}
                </p>

                <h3>Stream links:</h3>
                <p>
                    {movie.secondaryMedia.split(',').filter((link) => link.includes("https://mixdrop.co/") || link.includes("https://gofile.io/")).map((link, i) => <Link href={link} key={i}>Server{i + 1}</Link>)}
                </p>
            </div>}
            {movie.secondaryMedia.split(',').find((link) => link.includes("https://mixdrop")) &&
             <div className={styles.stream}><iframe  width="640" height="480" src={`//mixdrop.gl/e/${mixDropLink}`} scrolling="no" frameborder="0" allowfullscreen="true"></iframe> </div>}
             {movie.secondaryMedia.split(',').find((link) => link.includes("https://mixdrop")) && <Link  className={styles.download} href={`https://mixdrop.gl/f/${mixDropLink}`}>Download</Link>}
             
            <div className={styles.otherEpisodes}>
                <div>
                    {movie.previous && <Link href={`/series/${movie.previous._id}`} className={styles.changeEpisode}>
                    <div className={styles.upper}>
                        <Icon path={mdiArrowCollapseLeft} size={1} />
                            previous
                    </div>
                        <div>{`Episode ${movie.previous.episode}`}</div>
                        <div className={styles.upper}>{movie.previous.episodeTitle}</div>
                    </Link>}
                </div>

                <div>
                    {movie.next && <Link href={`/series/${movie.next._id}`} className={styles.changeEpisode}>
                        <div className={styles.upper}>
                            Next
                            <Icon path={mdiArrowCollapseRight} size={1} />
                        </div>
                        <div>{`Episode ${movie.next.episode}`}</div>
                        <div className={styles.upper}>{movie.next.episodeTitle}</div>
                    
                    </Link>}
                </div>
            </div>
        </div>
    )
}


