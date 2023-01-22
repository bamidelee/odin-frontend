import Image from 'next/image'
import styles from '../styles/newsDetails.module.css'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNow'
import {  TwitterVideoEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';
import YouTube from 'react-youtube';
export default function NewsDetails({news}){
    console.log(news.secondaryMedia)
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
                    NewsDetails.secondaryMediaType === 'instagram' &&
                    <InstagramEmbed
                    url = {news.secondaryMedia}
                    clientAccessToken='513200567457865|ebfc38c746fbb676a80f7b7976499823'
                    maxWidth={375}
                    hideCaption={false}
                    containerTagName='div'
                    injectScript
                    protocol=''
                    />
                }
           </div>
           }
           <p className={styles.description}>{news.description}</p>
        </div>
    )
}