import PostList from "../components/postList";
import { useLazyQuery } from "@apollo/client"
import { SEARCH_DASHPOST } from "../components/quarries";
import { useState, useEffect } from 'react';
import styles from '../styles/search.module.css'
import BoxBanner from '../components/boxBanner'
import Banner from "../components/banner";
import Script from "next/script";
import ClientOnly from "../components/Clientonly";


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
        <Banner slot={mobileBanner ? '1523ac683e9630ccc8aba4793a81d92b' : '8c47067f1ac7389ef98d7ba0c597c9d9'} />
      </ClientOnly>
      <h1>Search</h1>
      <div className={styles.inputContainer}>
        <input type="text" placeholder='Start searching...' value={search} onChange={({ target }) => { setSearch(target.value); search && searchDashpost({ variables: { title: search } }) }} />
        {loading && <div className={styles.loading}></div>}
      </div>
      {!search && <p>Start typing to search </p>}
      {data && search && <div className={styles.searchDashpost}>{data.searchDashpost.length > 0 && <PostList dashPosts={data.searchDashpost} title='Search result' />}</div>}
      {!mobileBanner && <ClientOnly>
        <div>
          <Script async="async" data-cfasync="false" src="//pl18660884.highrevenuegate.com/1e845c512aba6f843b89be278fa82a95/invoke.js"></Script>
          <div id="container-1e845c512aba6f843b89be278fa82a95"></div>
        </div>
      </ClientOnly>}

      {mobileBanner && <Banner slot='1d24a5888bd79927cba80711f10c599a' />
      }
    </div>
  )
}