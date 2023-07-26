import styles from '../styles/postCard.module.css'
import Image from 'next/image'
import NewsDetails from './newsDetails'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNow'
import Link from 'next/link'
import DashCard from './dashCard'
import { useState, useEffect } from 'react'

export default function PostCard({ news, title, page, type, pageCount, pageLink, countryName }) {
    const [count, setCount] = useState(Math.floor(pageCount / 10))
    const [country, setCountry] = useState(countryName? countryName: "")
   
    
    useEffect(( ) => {
        setCount(Math.ceil(pageCount / 15))
    }, [pageCount])
    return (
        <div className={styles.postCard}>
           
           {news && <DashCard dashPosts={news} title= {`${title.charAt(0).toUpperCase()}${title.slice(1)}`} page={pageLink} mini= {true} country = {country}/>}
          

            {count < 9 && <div className={styles.pagnation}>
                {[...Array(count)].map((p, i) => <Link className={parseInt(page) === i + 1 ? styles.activePage : styles.inactivePage} key={i} href={title === 'Latest movies' ? `/page/${title}/${i + 1}` : `/page/${title.toLowerCase()}/${i + 1}/${type}/${country}`}>{i + 1}</Link>)}
            </div>}

            {count > 8 && <div className={styles.pagnation}>
                <Link href={title === 'Latest movies' ? `/page/${title}/1/latestMovies` : `/page/${title.toLowerCase()}/1/${type}/${country}`} className={parseInt(page) === 1 ? styles.activePage : styles.inactivePage}>1</Link>
                <Link href={title === 'Latest movies' ? `/page/${title}/2/latestMovies` : `/page/${title.toLowerCase()}/2/${type}/${country}`} className={parseInt(page) === 2 ? styles.activePage : styles.inactivePage}>2</Link>
                {parseInt(page) > 4 && <div>...</div>}
                <Link href={title === 'Latest movies' ? `/page/${title}/${(parseInt(page) >= 5 && parseInt(page) < count - 3) ? parseInt(page) - 2 : parseInt(page) >= count - 3 ? count - 6 : 3}/latestMovies` : `/page/${title.toLowerCase()}/${(parseInt(page) >= 5 && parseInt(page) < count - 3) ? parseInt(page) - 2 : parseInt(page) >= count - 3 ? count - 6 : 3}/${type}/${country}`} className={parseInt(page) === 3 ? styles.activePage : styles.inactivePage}>{(parseInt(page) >= 5 && parseInt(page) < count - 3) ? parseInt(page) - 2 : parseInt(page) >= count - 3 ? count - 6 : 3}</Link>
                <Link href={title === 'Latest movies' ? `/page/${title}/${(parseInt(page) >= 5 && parseInt(page) < count - 3) ? parseInt(page) - 1 : parseInt(page) >= count - 3 ? count - 5 : 4}/latestMovies` : `/page/${title.toLowerCase()}/${(parseInt(page) >= 5 && parseInt(page) < count - 3) ? parseInt(page) - 1 : parseInt(page) >= count - 3 ? count - 5 : 4}/${type}/${country}`} className={parseInt(page) === 4 ? styles.activePage : styles.inactivePage}>{(parseInt(page) >= 5 && parseInt(page) < count - 3) ? parseInt(page) - 1 : parseInt(page) >= count - 3 ? count - 5 : 4}</Link>
                <Link href={title === 'Latest movies' ? `/page/${title}/${parseInt(page) < 5 ? 5 : parseInt(page) > count - 4 ? count - 4 : parseInt(page)}/latestMovies` : `/page/${title.toLowerCase()}/${parseInt(page) < 5 ? 5 : parseInt(page) > count - 4 ? count - 4 : parseInt(page)}/${type}`} className={(parseInt(page) > 4 && parseInt(page) <= count - 4) ? styles.activePage : styles.inactivePage}>{parseInt(page) < 5 ? 5 : parseInt(page) > count - 4 ? count - 4 : parseInt(page)}</Link>
                <Link href={title === 'Latest movies' ? `/page/${title}/${(parseInt(page) <= count - 4 && parseInt(page) > 4) ? parseInt(page) + 1 : parseInt(page) < 5 ? 6 : count - 3}/latestMovies` : `/page/${title.toLowerCase()}/${(parseInt(page) <= count - 4 && parseInt(page) > 4) ? parseInt(page) + 1 : parseInt(page) < 5 ? 6 : count - 3}/${type}/${country}`} className={parseInt(page) === count - 3 ? styles.activePage : styles.inactivePage}>{(parseInt(page) <= count - 4 && parseInt(page) > 4) ? parseInt(page) + 1 : parseInt(page) < 5 ? 6 : count - 3}</Link>
                <Link href={title === 'Latest movies' ? `/page/${title}/${(parseInt(page) <= count - 4 && parseInt(page) > 4) ? parseInt(page) + 2 : parseInt(page) < 5 ? 7 : count - 2}/latestMovies` : `/page/${title.toLowerCase()}/${(parseInt(page) <= count - 4 && parseInt(page) > 4) ? parseInt(page) + 2 : parseInt(page) < 5 ? 7 : count - 2}/${type}/${country}`} className={parseInt(page) === count - 2 ? styles.activePage : styles.inactivePage}>{(parseInt(page) <= count - 4 && parseInt(page) > 4) ? parseInt(page) + 2 : parseInt(page) < 5 ? 7 : count - 2}</Link>
                {parseInt(page) < count - 3 && <div>...</div>}
                <Link href={title === 'Latest movies' ? `/page/${title}/${count - 1}/latestMovies` : `/page/${title.toLowerCase()}/${count - 1}/${type}/${country}`} className={parseInt(page) === count - 1 ? styles.activePage : styles.inactivePage}>{count - 1}</Link>
                <Link href={title === 'Latest movies' ? `/page/${title}/${count}/latestMovies` : `/page/${title.toLowerCase()}/${count}/${type}/${country}`} className={parseInt(page) === count ? styles.activePage : styles.inactivePage}>{count}</Link>
            </div>}
        </div>
    )
}