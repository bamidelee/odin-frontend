import Link from 'next/link'
import styles from '../styles/sidebar.module.css'
import { useEffect, useState } from 'react'
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { mdiHome } from '@mdi/js';
import { mdiNewspaper } from '@mdi/js';
import { mdiFilmstrip } from '@mdi/js';
import { mdiSoccerField } from '@mdi/js';
import { mdiTable } from '@mdi/js';
import { useRouter } from 'next/router'

export default function SideBar(props) {
  const [newsOpen, setNewsOpen] = useState(false)
  const router = useRouter()


    return(
        <div className= {props.sideBar? `${styles.sidebar} ${styles.open}`: `${styles.sidebar} ${styles.closed}`}>
          
          <Link href="/" replace onClick={() =>props.setSideBar(false)}><Icon path={mdiHome} size={1} /> 
          <div  className={`${styles.link} ${router.pathname == '/' && styles.activeLink}`}>
              <span className={styles.linkTop}>Home</span>
              <span class={styles.linkBottom}>Home</span>
            </div>
          </Link>
          <Link href="/movies"  onClick={() =>props.setSideBar(false)}><Icon path={mdiFilmstrip} size={1} />
          <div   className={`${styles.link} ${router.pathname == '/movies' && styles.activeLink}`}>
              <span className={styles.linkTop}>Movies</span>
              <span class={styles.linkBottom}>Movies</span>
            </div>
          </Link>
          <button onClick={() => setNewsOpen(!newsOpen)}><Icon path={mdiNewspaper} size={1} />News <Icon path={mdiChevronDown} size={1} /></button>
          <div className={styles.newsLinks} style= {{display: newsOpen? 'flex':'none'}}>
            <Link href="/page/football/1/post"  onClick={() =>props.setSideBar(false)}>
            <div className={`${styles.link} ${router.asPath == '/page/football/1/post' && styles.activeLink}`}>
              <span className={styles.linkTop}>Football</span>
              <span class={styles.linkBottom}>Football</span>
            </div>
            </Link>
            <Link href="/page/entertainment/1/post" onClick={() =>props.setSideBar(false)}>
            <div  className={`${styles.link} ${router.asPath == '/page/entertainment/1/post' && styles.activeLink}`}>
              <span className={styles.linkTop}>Entertainment</span>
              <span class={styles.linkBottom}>Entertainment</span>
            </div>
            </Link>
            <Link  href="/page/politics/1/post"  onClick={() =>props.setSideBar(false)}>
            <div className={`${styles.link} ${router.asPath == '/page/politics/1/post' && styles.activeLink}`}>
              <span className={styles.linkTop}>Politics</span>
              <span class={styles.linkBottom}>Politics</span>
            </div>
            </Link>
            <Link  href="/page/international/1/post"  onClick={() =>props.setSideBar(false)}>
            <div className={`${styles.link} ${router.asPath == '/page/international/1/post' && styles.activeLink}`}>
              <span className={styles.linkTop}>International</span>
              <span class={styles.linkBottom}>International</span>
            </div>
            </Link>
          </div>
          <Link href="/fixtures"  onClick={() =>props.setSideBar(false)}><Icon path={mdiSoccerField} size={1} />
          <div  className={`${styles.link} ${router.pathname == '/fixtures' && styles.activeLink}`}>
              <span className={styles.linkTop}>Fixtures</span>
              <span class={styles.linkBottom}>Fixtures</span>
            </div></Link>
          <Link href="/tables"  onClick={() =>props.setSideBar(false)}><Icon path={mdiTable} size={1} />
          <div className={`${styles.link} ${router.pathname == '/tables' && styles.activeLink}`}>
              <span className={styles.linkTop}>Tables</span>
              <span class={styles.linkBottom}>Tables</span>
            </div>
          </Link>
        </div>
    )
}