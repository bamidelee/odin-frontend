import styles from '../styles/postCard.module.css'
import Image from 'next/image'
import NewsDetails from './newsDetails'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNow'
import Link from 'next/link'

export default function PostCard({news, title}){
  
    return(
        <div className={styles.postCard}>
            <h1>{title}</h1>
                <div className={styles.postCardTiles}>
                    <Link href={`post/${news[0]._id}`}>
                        <div className={`${styles.tile} ${styles.one}`}>
                            <div className={styles.tileImage}>
                                <Image src = {news[0].primaryMedia} alt={news[0].title} fill/>
                            </div>
                            <div className={styles.tileDetails}>
                                <h3>{news[0].title}</h3>
                                <p className={styles.description}>{news[0].description}</p>
                                <p className={styles.itemDate}>{formatDistanceToNowStrict(news[0].date)}</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`post/${news[1]._id}`}>
                        <div  className={`${styles.tile} ${styles.two}`}>
                            <div className={styles.tileImage}>
                                <Image src = {news[1].primaryMedia} alt={news[1].title} fill/>
                            </div>
                            <div className={styles.tileDetails}>
                                <h3>{news[1].title}</h3>
                                <p className={styles.description}>{news[1].description}</p>
                                <p className={styles.itemDate}>{formatDistanceToNowStrict(news[1].date)}</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`post/${news[2]._id}`}>
                        <div  className={`${styles.tile} ${styles.three}`}>
                            <div className={styles.tileImage}>
                                <Image src = {news[2].primaryMedia} alt={news[2].title} fill/>
                            </div>
                            <div className={styles.tileDetails}>
                                <h3>{news[2].title}</h3>
                                <p className={styles.itemDate}>{formatDistanceToNowStrict(news[2].date)}</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`post/${news[3]._id}`}>
                        <div  className={`${styles.tile} ${styles.four}`}>
                            <div className={styles.tileImage}>
                                <Image src = {news[3].primaryMedia} alt={news[3].title} fill/>
                            </div>
                            <div className={styles.tileDetails}>
                                <h3>{news[3].title}</h3>
                                <p className={styles.itemDate}>{formatDistanceToNowStrict(news[3].date)}</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`post/${news[4]._id}`}>
                        <div  className={`${styles.tile} ${styles.five}`}>
                            <div className={styles.tileImage}>
                                <Image src = {news[4].primaryMedia} alt={news[4].title} fill/>
                            </div>
                            <div className={styles.tileDetails}>
                                <h3>{news[4].title}</h3>
                                <p className={styles.description}>{news[4].description}</p>
                                <p className={styles.itemDate}>{formatDistanceToNowStrict(news[4].date)}</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`post/${news[5]._id}`}>
                        <div  className={`${styles.tile} ${styles.six}`}>
                            <div className={styles.tileImage}>
                                <Image src = {news[5].primaryMedia} alt={news[5].title} fill/>
                            </div>
                            <div className={styles.tileDetails}>
                                <h3>{news[5].title}</h3>
                        
                                <p className={styles.itemDate}>{formatDistanceToNowStrict(news[5].date)}</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`post/${news[6]._id}`}>
                        <div className={`${styles.tile} ${styles.seven}`}>
                            <div className={styles.tileImage}>
                                <Image src = {news[6].primaryMedia} alt={news[6].title} fill/>
                            </div>
                            <div className={styles.tileDetails}>
                                <h3>{news[6].title}</h3>
                        
                                <p className={styles.itemDate}>{formatDistanceToNowStrict(news[6].date)}</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`post/${news[7]._id}`}>
                        <div className={`${styles.tile} ${styles.eight}`}>
                            <div className={styles.tileImage}>
                                <Image src = {news[7].primaryMedia} alt={news[7].title} fill/>
                            </div>
                            <div className={styles.tileDetails}>
                                <h3>{news[7].title}</h3>
                        
                                <p className={styles.itemDate}>{formatDistanceToNowStrict(news[7].date)}</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`post/${news[8]._id}`}>
                        <div  className={`${styles.tile} ${styles.nine}`}>
                            <div className={styles.tileImage}>
                                <Image src = {news[8].primaryMedia} alt={news[8].title} fill/>
                            </div>
                            <div className={styles.tileDetails}>
                                <h3>{news[8].title}</h3>
                                <p className={styles.description}>{news[8].description}</p>
                                <p className={styles.itemDate}>{formatDistanceToNowStrict(news[8].date)}</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`post/${news[9]._id}`}>
                        <div  className={`${styles.tile} ${styles.ten}`}>
                            <div className={styles.tileImage}>
                                <Image src = {news[9].primaryMedia} alt={news[9].title} fill/>
                            </div>
                            <div className={styles.tileDetails}>
                                <h3>{news[9].title}</h3>
                                <p className={styles.description}>{news[9].description}</p>
                                <p className={styles.itemDate}>{formatDistanceToNowStrict(news[9].date)}</p>
                            </div>
                        </div>
                    </Link>
                </div>
        </div>
    )
}