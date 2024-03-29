import Image from 'next/image'
import { useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/dashCard.module.css'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNow'


export default function DashCard({ dashPosts, title, page, mini, country}) {


    return (
        <div className={styles.dashCard}>
            <h1>{title}</h1>
            <div className={styles.content}>
                {dashPosts.slice().map((post, index) =>
                    <Link key={index} href={(post.type === 'movie' || country) ? `/movies/${country? post._id :post.postID}` :  `/series/${country? post._id :post.postID}`}>
                        <div className={styles.item}>
                            <div className={styles.imageContainer}>
                                <Image src={post.primaryMedia} alt={post.title} fill   sizes="(max-width: 400px) 50vmin,
                        (max-width: 300px) 50vmin,
                        50vmin" />
                            </div>
                            <div className={styles.itemInfo}>
                
                                <div className={styles.itemTitle}>{post.title}</div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
            {/*page && <Link href={`/${page}`}>
               { !mini && <p className={styles.seeMore}>See more...</p>}
                </Link>*/}
        </div>
    )
}