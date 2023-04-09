import styles from '../styles/postCard.module.css'
import Image from 'next/image'
import NewsDetails from './newsDetails'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNow'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function PostCard({ news, title, page, type, pageCount }) {
    const [count, setCount] = useState(Math.floor(pageCount / 10))
 

    useEffect(( ) => {
        setCount(Math.floor(pageCount / 10))
    }, [pageCount])
    return (
        <div className={styles.postCard}>
            <h1>{`${title.charAt(0).toUpperCase()}${title.slice(1)}`}</h1>
            {news.length === 10 && <div className={styles.postCardTiles}>
                <Link href={type === 'post' ? `/post/${news[0].postID}` : type === 'movie' ? `/movies/${news[0].postID}` : `/movies/${news[0]._id}`} className={`${styles.tile} ${styles.one}`}>
                    <div className={styles.tileImage}>
                        <Image src={news[0].primaryMedia} alt={news[0].title} fill priority
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"/>
                    </div>
                    <div className={styles.tileDetails}>
                        <h3>{news[0].title}</h3>
                        <p className={styles.description}>{news[0].description}</p>
                        <p className={styles.itemDate}>{formatDistanceToNowStrict(news[0].date)}</p>
                    </div>
                </Link>
                <Link href={type === 'post' ? `/post/${news[1].postID}` : type === 'movie' ? `/movies/${news[1].postID}` : `/movies/${news[1]._id}`} className={`${styles.tile} ${styles.two}`}>
                    <div className={styles.tileImage}>
                        <Image src={news[1].primaryMedia} alt={news[1].title} fill
                            sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"/>
                    </div>
                    <div className={styles.tileDetails}>
                        <h3>{news[1].title}</h3>
                        <p className={styles.description}>{news[1].description}</p>
                        <p className={styles.itemDate}>{formatDistanceToNowStrict(news[1].date)}</p>
                    </div>
                </Link>
                <Link href={type === 'post' ? `/post/${news[2].postID}` : type === 'movie' ? `/movies/${news[2].postID}` : `/movies/${news[2]._id}`} className={`${styles.tile} ${styles.three}`}>
                    <div className={styles.tileImage}>
                        <Image src={news[2].primaryMedia} alt={news[2].title} fill
                            sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"/>
                    </div>
                    <div className={styles.tileDetails}>
                        <h3>{news[2].title}</h3>
                        <p className={styles.itemDate}>{formatDistanceToNowStrict(news[2].date)}</p>
                    </div>
                </Link>
                <Link href={type === 'post' ? `/post/${news[3].postID}` : type === 'movie' ? `/movies/${news[3].postID}` : `/movies/${news[3]._id}`} className={`${styles.tile} ${styles.four}`}>
                    <div className={styles.tileImage}>
                        <Image src={news[3].primaryMedia} alt={news[3].title} fill
                            sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"/>
                    </div>
                    <div className={styles.tileDetails}>
                        <h3>{news[3].title}</h3>
                        <p className={styles.itemDate}>{formatDistanceToNowStrict(news[3].date)}</p>
                    </div>
                </Link>
                <Link href={type === 'post' ? `/post/${news[4].postID}` : type === 'movie' ? `/movies/${news[4].postID}` : `/movies/${news[4]._id}`} className={`${styles.tile} ${styles.five}`}>
                    <div className={styles.tileImage}>
                        <Image src={news[4].primaryMedia} alt={news[4].title} fill
                            sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"/>
                    </div>
                    <div className={styles.tileDetails}>
                        <h3>{news[4].title}</h3>
                        <p className={styles.description}>{news[4].description}</p>
                        <p className={styles.itemDate}>{formatDistanceToNowStrict(news[4].date)}</p>
                    </div>
                </Link>
                <Link href={type === 'post' ? `/post/${news[5].postID}` : type === 'movie' ? `/movies/${news[5].postID}` : `/movies/${news[5]._id}`} className={`${styles.tile} ${styles.six}`}>
                    <div className={styles.tileImage}>
                        <Image src={news[5].primaryMedia} alt={news[5].title} fill
                            sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"/>
                    </div>
                    <div className={styles.tileDetails}>
                        <h3>{news[5].title}</h3>

                        <p className={styles.itemDate}>{formatDistanceToNowStrict(news[5].date)}</p>
                    </div>
                </Link>
                <Link href={type === 'post' ? `/post/${news[6].postID}` : type === 'movie' ? `/movies/${news[6].postID}` : `/movies/${news[6]._id}`} className={`${styles.tile} ${styles.seven}`}>
                    <div className={styles.tileImage}>
                        <Image src={news[6].primaryMedia} alt={news[6].title} fill
                            sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"/>
                    </div>
                    <div className={styles.tileDetails}>
                        <h3>{news[6].title}</h3>

                        <p className={styles.itemDate}>{formatDistanceToNowStrict(news[6].date)}</p>
                    </div>
                </Link>
                <Link href={type === 'post' ? `/post/${news[7].postID}` : type === 'movie' ? `/movies/${news[7].postID}` : `/movies/${news[7]._id}`} className={`${styles.tile} ${styles.eight}`}>
                    <div className={styles.tileImage}>
                        <Image src={news[7].primaryMedia} alt={news[7].title} fill
                            sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"/>
                    </div>
                    <div className={styles.tileDetails}>
                        <h3>{news[7].title}</h3>

                        <p className={styles.itemDate}>{formatDistanceToNowStrict(news[7].date)}</p>
                    </div>
                </Link>
                <Link href={type === 'post' ? `/post/${news[8].postID}` : type === 'movie' ? `/movies/${news[8].postID}` : `/movies/${news[8]._id}`} className={`${styles.tile} ${styles.nine}`}>
                    <div className={styles.tileImage}>
                        <Image src={news[8].primaryMedia} alt={news[8].title} fill
                            sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"/>
                    </div>
                    <div className={styles.tileDetails}>
                        <h3>{news[8].title}</h3>
                        <p className={styles.description}>{news[8].description}</p>
                        <p className={styles.itemDate}>{formatDistanceToNowStrict(news[8].date)}</p>
                    </div>
                </Link>
                <Link href={type === 'post' ? `/post/${news[9].postID}` : type === 'movie' ? `/movies/${news[9].postID}` : `/movies/${news[9]._id}`} className={`${styles.tile} ${styles.ten}`} >
                    <div className={styles.tileImage}>
                        <Image src={news[9].primaryMedia} alt={news[9].title} fill
                            sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"/>
                    </div>
                    <div className={styles.tileDetails}>
                        <h3>{news[9].title}</h3>
                        <p className={styles.description}>{news[9].description}</p>
                        <p className={styles.itemDate}>{formatDistanceToNowStrict(news[9].date)}</p>
                    </div>
                </Link>
            </div>}


            {count < 9 && <div className={styles.pagnation}>
                {[...Array(count)].map((p, i) => <Link className={parseInt(page) === i + 1 ? styles.activePage : styles.inactivePage} key={i} href={title === 'Latest movies' ? `/page/${title}/${i + 1}` : `/page/${title.toLowerCase()}/${i + 1}/${type}`}>{i + 1}</Link>)}
            </div>}

            {count > 8 && <div className={styles.pagnation}>
                <Link href={title === 'Latest movies' ? `/page/${title}/1` : `/page/${title.toLowerCase()}/1/${type}`} className={parseInt(page) === 1 ? styles.activePage : styles.inactivePage}>1</Link>
                <Link href={title === 'Latest movies' ? `/page/${title}/2` : `/page/${title.toLowerCase()}/2/${type}`} className={parseInt(page) === 2 ? styles.activePage : styles.inactivePage}>2</Link>
                {parseInt(page) > 4 && <div>...</div>}
                <Link href={title === 'Latest movies' ? `/page/${title}/${(parseInt(page) >= 5 && parseInt(page) < count - 3) ? parseInt(page) - 2 : parseInt(page) >= count - 3 ? count - 6 : 3}` : `/page/${title.toLowerCase()}/${(parseInt(page) >= 5 && parseInt(page) < count - 3) ? parseInt(page) - 2 : parseInt(page) >= count - 3 ? count - 6 : 3}/${type}`} className={parseInt(page) === 3 ? styles.activePage : styles.inactivePage}>{(parseInt(page) >= 5 && parseInt(page) < count - 3) ? parseInt(page) - 2 : parseInt(page) >= count - 3 ? count - 6 : 3}</Link>
                <Link href={title === 'Latest movies' ? `/page/${title}/${(parseInt(page) >= 5 && parseInt(page) < count - 3) ? parseInt(page) - 1 : parseInt(page) >= count - 3 ? count - 5 : 4}` : `/page/${title.toLowerCase()}/${(parseInt(page) >= 5 && parseInt(page) < count - 3) ? parseInt(page) - 1 : parseInt(page) >= count - 3 ? count - 5 : 4}/${type}`} className={parseInt(page) === 4 ? styles.activePage : styles.inactivePage}>{(parseInt(page) >= 5 && parseInt(page) < count - 3) ? parseInt(page) - 1 : parseInt(page) >= count - 3 ? count - 5 : 4}</Link>
                <Link href={title === 'Latest movies' ? `/page/${title}/${parseInt(page) < 5 ? 5 : parseInt(page) > count - 4 ? count - 4 : parseInt(page)}` : `/page/${title.toLowerCase()}/${parseInt(page) < 5 ? 5 : parseInt(page) > count - 4 ? count - 4 : parseInt(page)}/${type}`} className={(parseInt(page) > 4 && parseInt(page) <= count - 4) ? styles.activePage : styles.inactivePage}>{parseInt(page) < 5 ? 5 : parseInt(page) > count - 4 ? count - 4 : parseInt(page)}</Link>
                <Link href={title === 'Latest movies' ? `/page/${title}/${(parseInt(page) <= count - 4 && parseInt(page) > 4) ? parseInt(page) + 1 : parseInt(page) < 5 ? 6 : count - 3}` : `/page/${title.toLowerCase()}/${(parseInt(page) <= count - 4 && parseInt(page) > 4) ? parseInt(page) + 1 : parseInt(page) < 5 ? 6 : count - 3}/${type}`} className={parseInt(page) === count - 3 ? styles.activePage : styles.inactivePage}>{(parseInt(page) <= count - 4 && parseInt(page) > 4) ? parseInt(page) + 1 : parseInt(page) < 5 ? 6 : count - 3}</Link>
                <Link href={title === 'Latest movies' ? `/page/${title}/${(parseInt(page) <= count - 4 && parseInt(page) > 4) ? parseInt(page) + 2 : parseInt(page) < 5 ? 7 : count - 2}` : `/page/${title.toLowerCase()}/${(parseInt(page) <= count - 4 && parseInt(page) > 4) ? parseInt(page) + 2 : parseInt(page) < 5 ? 7 : count - 2}/${type}`} className={parseInt(page) === count - 2 ? styles.activePage : styles.inactivePage}>{(parseInt(page) <= count - 4 && parseInt(page) > 4) ? parseInt(page) + 2 : parseInt(page) < 5 ? 7 : count - 2}</Link>
                {parseInt(page) < count - 3 && <div>...</div>}
                <Link href={title === 'Latest movies' ? `/page/${title}/${count - 1}` : `/page/${title.toLowerCase()}/${count - 1}/${type}`} className={parseInt(page) === count - 1 ? styles.activePage : styles.inactivePage}>{count - 1}</Link>
                <Link href={title === 'Latest movies' ? `/page/${title}/${count - 1}` : `/page/${title.toLowerCase()}/${count}/${type}`} className={parseInt(page) === count ? styles.activePage : styles.inactivePage}>{count}</Link>
            </div>}
        </div>
    )
}