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

export default function SideBar(props) {
  const [newsOpen, setNewsOpen] = useState(false)

    return(
        <div className= {props.sideBar? `${styles.sidebar} ${styles.open}`: `${styles.sidebar} ${styles.closed}`}>
          
          <Link href="/" replace onClick={() =>props.setSideBar(false)}><Icon path={mdiHome} size={1} />Home</Link>
          <Link href="/movies"  onClick={() =>props.setSideBar(false)}><Icon path={mdiFilmstrip} size={1} />Movies</Link>
          <button onClick={() => setNewsOpen(!newsOpen)}><Icon path={mdiNewspaper} size={1} />News <Icon path={mdiChevronDown} size={1} /></button>
          <div className={styles.newsLinks} style= {{display: newsOpen? 'flex':'none'}}>
            <Link href="/page/football/1/post"  onClick={() =>props.setSideBar(false)}>Football</Link>
            <Link href="/page/entertainment/1/post" onClick={() =>props.setSideBar(false)}> Entertainment</Link>
            <Link  href="/page/politics/1/post"  onClick={() =>props.setSideBar(false)}>Politics</Link>
            <Link  href="/page/international/1/post"  onClick={() =>props.setSideBar(false)}>International</Link>
          </div>
          <Link href="/fixtures"  onClick={() =>props.setSideBar(false)}><Icon path={mdiSoccerField} size={1} />Fixtures</Link>
          <Link href="/tables"  onClick={() =>props.setSideBar(false)}><Icon path={mdiTable} size={1} />Tables</Link>
        </div>
    )
}