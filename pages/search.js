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
      {mobileBanner && <div className="ads"><iframe data-aa='2226984' src='//ad.a-ads.com/2226984?size=320x100' style={{ width: '320px', height: '100px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}

      {!mobileBanner && <div className="ads"><iframe data-aa='2226990' src='//ad.a-ads.com/2226990?size=728x90' style={{ width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}

      <h1>Search</h1>
      <div className={styles.inputContainer}>
        <input type="text" placeholder='Start searching...' value={search} onChange={({ target }) => { setSearch(target.value); search && searchDashpost({ variables: { title: search } }) }} />
        {loading && <div className={styles.loading}></div>}
      </div>
      {!search && <p>Start typing to search </p>}
      {data && search && <div className={styles.searchDashpost}>{data.searchDashpost.length > 0 && <DashCard title='Search Result' dashPosts={data.searchDashpost} />}</div>}

      {mobileBanner && <div className="ads"><iframe ddata-aa='2226993' src='//ad.a-ads.com/2226993?size=336x280' style={{ width: '336px', height: '280px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}

      {!mobileBanner && <div className="ads"><iframe data-aa='2226997' src='//ad.a-ads.com/2226997?size=728x90' style={{ width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}
    </div>
  )
}