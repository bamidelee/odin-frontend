import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/dashCard.module.css'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNow'
export default function PostList({dashPosts, title, replace}){

    if(replace){
        return(
            <div className={styles.dashCard}>
              <h1>{title}</h1>
             {dashPosts.map((post, index) => 
            <Link key={index} href={`/post/${post._id}`} replace>
                <div className={styles.item}>
                      <Image src={post.primaryMedia} alt={post.title} width={100} height={70}/>
                      <div className={styles.itemInfo}>
                        <div className={styles.itemDate}>  { formatDistanceToNowStrict(post.date, { representation: 'date' })}</div>
                          <div className={styles.itemTitle}>{post.title}</div>
                      </div>
                </div>
            </Link>
            )}
        </div>
        )
    }
    return(
        <div className={styles.dashCard}>
              <h1>{title}</h1>
             {dashPosts.map((post, index) => 
            <Link key={index} href={post.type === 'post'? `search/post/${post.postID}` : `search/movies/${post.postID}`}>
                <div className={styles.item}>
                      <Image src={post.primaryMedia} alt={post.title} width={100} height={70}/>
                      <div className={styles.itemInfo}>
                        <div className={styles.itemDate}>  { formatDistanceToNowStrict(post.date, { representation: 'date' })}</div>
                          <div className={styles.itemTitle}>{post.title}</div>
                      </div>
                </div>
            </Link>
            )}
        </div>
    )
}