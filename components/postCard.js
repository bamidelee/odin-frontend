import styles from '../styles/postCard.module.css'
import Image from 'next/image'
import NewsDetails from './newsDetails'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNow'
import Link from 'next/link'
import { useState } from 'react'

export default function PostCard({news, title, page}){

    return(
        <div className={styles.postCard}>
            <h1>{`${title.charAt(0).toUpperCase()}${title.slice(1)}`}</h1>
                {news.length === 10 &&<div className={styles.postCardTiles}>
                    <Link href={`/post/${news[0]._id}`} className={`${styles.tile} ${styles.one}`} replace>
                        <div className={styles.tileImage}>
                            <Image src = {news[0].primaryMedia} alt={news[0].title} fill priority 
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
                    <Link href={`/post/${news[1]._id}`} className={`${styles.tile} ${styles.two}`} replace>
                        <div className={styles.tileImage}>
                            <Image src = {news[1].primaryMedia} alt={news[1].title} fill 
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
                    <Link href={`/post/${news[2]._id}`}  className={`${styles.tile} ${styles.three}`} replace>
                        <div className={styles.tileImage}>
                            <Image src = {news[2].primaryMedia} alt={news[2].title} fill
                             sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"/>
                        </div>
                        <div className={styles.tileDetails}>
                            <h3>{news[2].title}</h3>
                            <p className={styles.itemDate}>{formatDistanceToNowStrict(news[2].date)}</p>
                        </div>
                    </Link>
                    <Link href={`/post/${news[3]._id}`} className={`${styles.tile} ${styles.four}`} replace>
                        <div className={styles.tileImage}>
                            <Image src = {news[3].primaryMedia} alt={news[3].title} fill
                             sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"/>
                        </div>
                        <div className={styles.tileDetails}>
                            <h3>{news[3].title}</h3>
                            <p className={styles.itemDate}>{formatDistanceToNowStrict(news[3].date)}</p>
                        </div>
                    </Link>
                    <Link href={`/post/${news[4]._id}`} className={`${styles.tile} ${styles.five}`} replace>
                        <div className={styles.tileImage}>
                            <Image src = {news[4].primaryMedia} alt={news[4].title} fill
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
                    <Link href={`/post/${news[5]._id}`}  className={`${styles.tile} ${styles.six}`} replace>
                        <div className={styles.tileImage}>
                            <Image src = {news[5].primaryMedia} alt={news[5].title} fill
                             sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"/>
                        </div>
                        <div className={styles.tileDetails}>
                            <h3>{news[5].title}</h3>
                        
                            <p className={styles.itemDate}>{formatDistanceToNowStrict(news[5].date)}</p>
                        </div>
                    </Link>
                    <Link href={`/post/${news[6]._id}`} className={`${styles.tile} ${styles.seven}`} replace>
                        <div className={styles.tileImage}>
                            <Image src = {news[6].primaryMedia} alt={news[6].title} fill
                             sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"/>
                        </div>
                        <div className={styles.tileDetails}>
                            <h3>{news[6].title}</h3>
                        
                            <p className={styles.itemDate}>{formatDistanceToNowStrict(news[6].date)}</p>
                        </div>
                    </Link>
                    <Link href={`/post/${news[7]._id}`} className={`${styles.tile} ${styles.eight}`} replace>
                        <div className={styles.tileImage}>
                            <Image src = {news[7].primaryMedia} alt={news[7].title} fill
                             sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"/>
                        </div>
                        <div className={styles.tileDetails}>
                            <h3>{news[7].title}</h3>
                        
                            <p className={styles.itemDate}>{formatDistanceToNowStrict(news[7].date)}</p>
                        </div>
                    </Link>
                    <Link href={`/post/${news[8]._id}`} className={`${styles.tile} ${styles.nine}`} replace>
                        <div className={styles.tileImage}>
                            <Image src = {news[8].primaryMedia} alt={news[8].title} fill
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
                    <Link href={`/post/${news[9]._id}`} className={`${styles.tile} ${styles.ten}`} replace>
                        <div className={styles.tileImage}>
                            <Image src = {news[9].primaryMedia} alt={news[9].title} fill
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
                <div className={styles.pageChange}>
                  { parseInt(page) > 1 && <Link href={`/page/${title}/${parseInt(page) - 1}`} replace>←Previous</Link>}
                    <Link href={`/page/${title}/${parseInt(page) + 1}`} replace className={styles.next}>Next→</Link>
                </div>
        </div>
    )
}