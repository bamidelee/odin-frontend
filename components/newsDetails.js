import Image from 'next/image'
import styles from '../styles/newsDetails.module.css'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNow'
import {  TwitterVideoEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import ClientOnly from "./Clientonly"
import YouTube from 'react-youtube';
export default function NewsDetails({news}){
   
    return(
        <div className={styles.news}>
            <div className={styles.imageContainer}>
                <Image src={news.primaryMedia} alt={news.title} fill priority
                 sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"/>
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

                {
                    news.secondaryMediaType === 'image' &&<div className={styles.secondaryImage}>
                         <Image src={news.secondaryMedia} alt={news.title} fill  sizes="(max-width: 768px) 100vmin,
                        (max-width: 1200px) 50vw,
                        33vw"/>
                    </div>
                }
               
           </div>
           }
          {news.description.split("/n").map((news, i) => <p key={i} className={styles.description}>{news}</p>)}
        </div>
    )
}