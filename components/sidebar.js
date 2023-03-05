import Link from 'next/link'
import styles from '../styles/sidebar.module.css'
import { useEffect } from 'react'

export default function SideBar(props) {


    return(
        <div className= {props.sideBar? `${styles.sidebar} ${styles.open}`: `${styles.sidebar} ${styles.closed}`}>
          <Link href="/" replace onClick={() =>props.setSideBar(false)}>Home</Link>
          <Link href="/movies" replace onClick={() =>props.setSideBar(false)}>Movies</Link>
          <Link href="/page/football/1/post" replace onClick={() =>props.setSideBar(false)}>Football</Link>
          <Link href="/page/entertainment/1/post" replace onClick={() =>props.setSideBar(false)}> Entertainment</Link>
          <Link  href="/page/politics/1/post" replace onClick={() =>props.setSideBar(false)}>Politics</Link>
          <Link  href="/page/international/1/post" replace onClick={() =>props.setSideBar(false)}>International</Link>
          <Link href="/fixtures" replace onClick={() =>props.setSideBar(false)}>Fixtures</Link>
          <Link href="/tables" replace onClick={() =>props.setSideBar(false)}>Tables</Link>
        </div>
    )
}