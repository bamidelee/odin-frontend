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
import ReactPlayer from 'react-player'
import DashCard from '../dashCard';
import ClientOnly from '../Clientonly';



export default function MoviePreview({ movie, alsoSee }) {
    const [hasMounted, setHasMounted] = useState(false);
    const [createTrend, { data, loading, error }] = useMutation(CREATE_TREND);
    const [server, setServer] = useState(' ')

    const mixDrop = movie.secondaryMedia.split(',').find((link) => link.includes("https://mixdrop"))
    const goFile = movie.secondaryMedia.split(',').find((link) => link.includes("gofile.io/download/direct"))
    const mixDropLink = mixDrop && mixDrop.split('/')[4]
    const mixDroop = movie.secondaryMedia.split(',').find((link) => link.includes("https://mixdroop"))
    const mixDroopLink = mixDroop && mixDroop.split('/')[4]
    const streamTape = movie.secondaryMedia.split(',').find((link) => link.includes("streamtape"))
    const streamTapeLink = streamTape && streamTape.split('/')[4]
    const streamSB = movie.secondaryMedia.split(',').find((link) => link.includes("lvturbo"))
    const streamSBLink = streamSB && streamSB.split('/')[4]
    const [displayTrailer, setDisplayTrailer] = useState(false)
    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: true,
        },
    };
    const [downloadAd, setDownloadAd] = useState(true)
    const [streamAd, setStreamAd] = useState(true)
    const [seenAD, setSeenAD] = useState('')
   
    const [random, setRandom] = useState( Math.floor(Math.random()* (alsoSee.length-9)))
    const [mobileBanner, setMobileBanner] = useState(false)

   

    useEffect(() => {
        setHasMounted(true)
    }, [])

    useEffect(() => {
        if (hasMounted && movie.episode === "1") {
            createTrend({ variables: { id: movie._id } })
        }
    }, [hasMounted])

    useEffect(() => {

        if (window.innerWidth < 650) {
            setMobileBanner(true)
        }
    }, [])


    useEffect(() => {
        if (goFile) {
            setServer('goFile')
        }
        else if (streamSB) {
            setServer('streamsb')
        }
        else if (streamTape) {
            setServer('streamtape')
        }

        else {
            setServer('mixdrop')
        }

        setDownloadAd(true)
        setStreamAd(true)

        const seen = localStorage.getItem("mounted")
        setSeenAD(seen)

        setRandom(Math.floor(Math.random()* (alsoSee.length-9)))

    }, [movie])

    useEffect(() => {
        if (seenAD) {
            localStorage.clear()
        }
    }, [movie, seenAD])

   

    return (
        <div className={styles.moviePreview}>
            {displayTrailer && <div className={styles.trailer} onClick={() => setDisplayTrailer(false)}>
                <YouTube videoId={movie.trailer} opts={opts} />;
            </div>}

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
                    <p className={styles.stars}>
                        {movie.genre.map(genre => <span key={genre}>{genre} . </span>)}
                    </p>
                    <h3>Industry</h3>
                    <p>
                        {movie.country}
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
                        {movie.stars.map(genre => <span key={genre}>{genre} . </span>)}
                    </p>
                    <h3>Realese date</h3>
                    <p>{format(new Date(movie.releaseDate), 'MM/dd/yyyy')}</p>
                    <h3>Language</h3>
                    <p>{movie.language}</p>
                    {movie.trailer && <h3 className={styles.trailerButton} onClick={() => setDisplayTrailer(true)}>Trailer</h3>}
                </div>

            </div>
            <div className={styles.description}>
                <h3>Plot</h3>
                <p>{movie.description}</p>
            </div>



            <div className={styles.stream}>
                <h2>Stream</h2>
                {/*!movie.secondaryMedia.split(',').find((link) => link.includes("https://mixdrop")) && <div className={styles.download}>
                    <h3>Download links:</h3>
                    <p>
                        {movie.secondaryMedia.split(',').map((link, i) => <Link href={link} key={i}>Server{i + 1}</Link>)}
                    </p>
                    <h3>Stream links:</h3>
                    <p>
                        {movie.secondaryMedia.split(',').filter((link) => link.includes("https://mixdrop.co/") || link.includes("https://gofile.io/")).map((link, i) => <Link href={link} key={i}>Server{i + 1}</Link>)}
                    </p>
    </div>*/}
                {movie.secondaryMedia.split(',').find((link) => link.includes("https://mixdrop")) && server === 'mixdrop' &&
                    <div><iframe width="640" height="360" src={`//mixdrop.gl/e/${mixDropLink}`} scrolling="no" frameborder="0" allowfullscreen="true"></iframe> </div>}
                {movie.secondaryMedia.split(',').find((link) => link.includes("https://mixdroop")) && server === 'mixdrop' &&
                    <div><iframe width="640" height="360" src={`//mixdrop.gl/e/${mixDroopLink}`} scrolling="no" frameborder="0" allowfullscreen="true"></iframe> </div>}


                {movie.secondaryMedia.split(',').find((link) => link.includes("streamtape")) && server === 'streamtape' &&
                    <div className={styles.vidPlayer}>
                        <iframe src={`https://streamtape.com/e/${streamTapeLink}/`} width="100%" height="100%" allowfullscreen="true" allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>
                    </div>}

                {movie.secondaryMedia.split(',').find((link) => link.includes("lvturbo")) && server === 'streamsb' &&
                    <div>
                        <iframe src={`https://lvturbo.com/e/${streamSBLink}`} frameborder='0' marginwidth='0' marginheight='0' scrolling='no' width='640' height='360' allowfullscreen="true" autoplay="true"></iframe>
                    </div>}

                {goFile && server === 'goFile' && <div className={styles.vidPlayer} onClick={() => { movie.episode === '1' && createTrend({ variables: { id: movie._id } }) }}>

                    <ReactPlayer url={goFile} controls
                        config={{
                            file: {
                                tracks: [
                                    { kind: 'subtitles', src: movie.source, srcLang: 'en', default: true },
                                ]
                            }
                        }}
                        width='100%'
                        height='100%'
                        onStart= {() => !movie.season && createTrend({ variables: { id: movie._id } })}
                        light={<img src={movie.primaryMedia} alt='Thumbnail' />}
                    />
                    {/*streamAd && !seenAD && <Link className={styles.streamAd} onClick={() => {setStreamAd(false);   localStorage.setItem("mounted", "yes")}} href='https://ads.dochaseadx.com/adx-dir-d/link?aid=5308&nid=13&imp=1&w=1&h=1' target='_blank'>
                    </Link>*/}
                </div>}
                <p>If current server does not work please try other servers below.</p>
                <div className={styles.serverChange}>
                    {goFile && <button className={server === 'goFile' ? styles.activeLink : styles.inactiveLink} onClick={() => setServer('goFile')}>Main-server</button>}
                    {streamSB && <button className={server === 'streamsb' ? styles.activeLink : styles.inactiveLink} onClick={() => setServer('streamsb')}>Streamsb</button>}
                    {streamTape && <button className={server === 'streamtape' ? styles.activeLink : styles.inactiveLink} onClick={() => setServer('streamtape')}>Streamtape</button>}

                    {(mixDrop || mixDroop) && <button className={server === 'mixdrop' ? styles.activeLink : styles.inactiveLink} onClick={() => setServer('mixdrop')}>Mixdrop</button>}


                </div>
            </div>


            <div className={styles.downloadLinks}>
                <h2>Download</h2>
                {/*goFile && downloadAd && !seenAD && <Link onClick={() => {setDownloadAd(false);   localStorage.setItem("mounted", "yes")}} className={styles.download} href='https://ads.dochaseadx.com/adx-dir-d/link?aid=5308&nid=13&imp=1&w=1&h=1' target='_blank'>Main-server</Link>*/}
                {goFile /*&& (!downloadAd || seenAD)*/ && <Link onClick={() => { localStorage.clear(); !movie.season && createTrend({ variables: { id: movie._id } }); movie.episode === '1' && createTrend({ variables: { id: movie._id } }) }} className={styles.download} href={goFile}>Main-server</Link>}
                {movie.secondaryMedia.split(',').find((link) => link.includes("streamtape")) && <Link className={styles.download} href={`${streamTape}`}>Streamtape</Link>}
                {movie.secondaryMedia.split(',').find((link) => link.includes("lvturbo")) && <Link className={styles.download} href={`${streamSB}`}>Streamsb</Link>}
                {movie.secondaryMedia.split(',').find((link) => link.includes("https://mixdrop")) && <Link className={styles.download} href={`https://mixdrop.gl/f/${mixDropLink}?download`}>Mixdrop</Link>}
                {movie.secondaryMedia.split(',').find((link) => link.includes("https://mixdroop")) && <Link className={styles.download} href={`https://mixdrop.gl/f/${mixDroopLink}?download`}>Mixdrop</Link>}


            </div>

            {movie.source && <Link href={movie.source} className={styles.subtitle}>Subtitle</Link>}

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
            <ClientOnly>
                {mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5320&reqin=iframe&w=300&h=250&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '300px', height: '250px' }}></iframe></div>}
            </ClientOnly>

            <ClientOnly>
                {!mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5310&reqin=iframe&w=728&h=90&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '728px', height: '90px' }}></iframe></div>}
            </ClientOnly>

            <DashCard dashPosts={alsoSee.filter(n => n.title !== movie.title).slice( random, random + 8 )} title={'You might also like'}/>
        </div>
    )
}


