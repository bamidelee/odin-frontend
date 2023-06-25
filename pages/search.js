import PostList from "../components/postList";
import { useLazyQuery } from "@apollo/client"
import { SEARCH_DASHPOST } from "../components/quarries";
import { useState, useEffect } from 'react';
import styles from '../styles/search.module.css'

import Script from "next/script";
import ClientOnly from "../components/Clientonly";
import DashCard from '../components/dashCard'

export default function Search() {
  const [search, setSearch] = useState('')
  const [searchDashpost, { data, loading, error }] = useLazyQuery(SEARCH_DASHPOST);
  const [mobileBanner, setMobileBanner] = useState(false)

  useEffect(() => {

    if (window.innerWidth < 650) {
      setMobileBanner(true)
    }
  }, [])


  return (
    <div className={styles.search}>
      <ClientOnly>
        {mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5321&reqin=iframe&w=320&h=50&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '320px', height: '50px' }}></iframe></div>}
      </ClientOnly>

      <ClientOnly>
        {mobileBanner && <div className="ads"><iframe src="https://cybertronads.com/platform/show.php?z=-1&pl=2255" width="320" height="50" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe></div>}
      </ClientOnly>

      <ClientOnly>
        {!mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5310&reqin=iframe&w=728&h=90&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '728px', height: '90px' }}></iframe></div>}
      </ClientOnly>

      <h1>Search</h1>
      <div className={styles.inputContainer}>
        <input type="text" placeholder='Start searching...' value={search} onChange={({ target }) => { setSearch(target.value); search && searchDashpost({ variables: { title: search } }) }} />
        {loading && <div className={styles.loading}></div>}
      </div>
      {!search && <p>Start typing to search </p>}
      {data && search && <div className={styles.searchDashpost}>{data.searchDashpost.length > 0 && <DashCard title='Search Result' dashPosts={data.searchDashpost} />}</div>}

      <ClientOnly>
        {mobileBanner && <div className="ads"><iframe src="https://cybertronads.com/platform/show.php?z=-1&pl=2256" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>
        </div>}
      </ClientOnly>

      <ClientOnly>
        {!mobileBanner && <div className="ads"><iframe data-aa='2226997' src='//ad.a-ads.com/2226997?size=728x90' style={{ width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}
      </ClientOnly>
    </div>
  )
}