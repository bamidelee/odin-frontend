import PostList from "../components/postList";
import { useLazyQuery } from "@apollo/client"
import { SEARCH_DASHPOST } from "../components/quarries";
import { useState, useEffect, use } from 'react';
import styles from '../styles/search.module.css'

import Script from "next/script";
import ClientOnly from "../components/Clientonly";
import DashCard from '../components/dashCard'

export default function Search() {
  const [search, setSearch] = useState('')
  const [searchDashpost, { data, loading, error }] = useLazyQuery(SEARCH_DASHPOST);
  const [mobileBanner, setMobileBanner] = useState(false)
  const [dataResult, setDataResult] = useState('')

  useEffect(() => {

    if (window.innerWidth < 650) {
      setMobileBanner(true)
    }
  }, [])

  useEffect(() => {
    if(data){
      setDataResult(data.searchDashpost)
    }
  }, [data])

console.log(dataResult)
  return (
    <div className={styles.search}>
      <ClientOnly>
        {mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5320&reqin=iframe&w=300&h=250&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '300px', height: '250px' }}></iframe></div>}
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
      {search && !loading && !dataResult[0] && <h1 className={styles.noResult}>No Result</h1>}
      {data && search && <div className={styles.searchDashpost}>{data.searchDashpost.length > 0 && <DashCard title='Search Result' dashPosts={data.searchDashpost} />}</div>}

      <ClientOnly>
        {mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5320&reqin=iframe&w=300&h=250&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '300px', height: '250px' }}></iframe></div>}
      </ClientOnly>

      <ClientOnly>
        {!mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5310&reqin=iframe&w=728&h=90&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '728px', height: '90px' }}></iframe></div>}
      </ClientOnly>

    </div>
  )
}