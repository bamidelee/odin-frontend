import Link from 'next/link'
import styles from '../styles/sidebar.module.css'
import { useEffect } from 'react'

export default function SideBar(props) {


    return(
        <div className= {props.sideBar? `${styles.sidebar} ${styles.open}`: `${styles.sidebar} ${styles.closed}`}>
          <ul>
            <li>
              <Link href="/">Home</Link>
              
            </li>
            <li>
              <Link href="football">Football</Link>
            </li>
        </ul>
        </div>
    )
}