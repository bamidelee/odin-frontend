import Image from 'next/image'
import styles from '../styles/newsDetails.module.css'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNow'
import {  TwitterVideoEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import YouTube from 'react-youtube';
export default function NewsDetails({news}){
    console.log(news.secondaryMedia)
    return(
        <div className={styles.newsDetails}>
            <div className={styles.news}>
                <div className={styles.imageContainer}>
                    <Image src={news.primaryMedia} alt={news.title} fill priority/>
                </div>
                <p className={styles.date}>
                    {formatDistanceToNowStrict(news.date)}
                </p>
                <h2 className={styles.title}>
                    {news.title}
                </h2>
               {news.secondaryMedia &&
               <div className={styles.secondaryMedia} >
                    {news.secondaryMediaType === 'twitterVideo' && 
                        <TwitterTweetEmbed tweetId = {news.secondaryMedia} />
                    }
                    {
                        news.secondaryMediaType === 'youtube' &&
                        <YouTube videoId={news.secondaryMedia}/>
                    }
               </div>
               }
            </div>
            <div>

            </div>
        </div>
    )
}