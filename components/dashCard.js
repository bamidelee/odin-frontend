import Image from 'next/image'
import { useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/dashCard.module.css'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNow'


export default function DashCard ({dashPosts, title, page, type}){


    return(
        <div className={styles.dashCard}>
            <h1>{title}</h1>
            <Link href={page === 'trending'?`movies/${dashPosts[0].postID}`: page === 'latest movie'?`movies/${dashPosts[0]._id}`:`post/${dashPosts[0]._id}`}>
                <div className={styles.dashCard1}>
                    <div className={styles.imageContainer}>
                        <Image src = {dashPosts[0].primaryMedia} alt={dashPosts[0].title} fill priority
                         sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"/>
                    </div>
                    <div className={styles.dashCard1Info}>
                        <div className={styles.dashCard1Date}>
                            { formatDistanceToNowStrict(dashPosts[0].date, { representation: 'date' })}
                        </div>
                        <div className={styles.dashCard1Title}>
                            {dashPosts[0].title}
                        </div>
                    </div>
                </div>
            </Link>
            {dashPosts.slice(1,5).map((post, index) => 
            <Link key={index} href={page === 'trending'?`movies/${post.postID}`: page === 'latest movie'?`movies/${post._id}`:`post/${post._id}`}>
                <div className={styles.item}>
                      <Image src={post.primaryMedia} alt={post.title} width={70} height={70}/>
                      <div className={styles.itemInfo}>
                        <div className={styles.itemDate}>  { formatDistanceToNowStrict(post.date, { representation: 'date' })}</div>
                          <div className={styles.itemTitle}>{post.title}</div>
                      </div>
                </div>
            </Link>
            )}
            {page && <Link href={page === 'trending'? 'movies':page === 'latest movie'? `page/Latest movies/1`:`page/${page}/1/${type}`}>
                <p className={styles.seeMore}>See more...</p>
            </Link>}
        </div>
    )
}