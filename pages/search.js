import PostList from "../components/postList";
import { useLazyQuery } from "@apollo/client"
import { SEARCH_DASHPOST } from "../components/quarries";
import { useState, useEffect } from 'react';
import styles from '../styles/search.module.css'
import BoxBanner from '../components/boxBanner'


export default function Search(){
    const [search, setSearch] = useState('')
    const [searchDashpost, { data, loading, error }] = useLazyQuery(SEARCH_DASHPOST);
    const [mobileBanner, setMobileBanner] = useState(false)

    useEffect(() => {
     
      if(window.innerWidth < 650){
        setMobileBanner(true)
      }
    },[])


    return(
        <div className={styles.search}>
            {mobileBanner && <BoxBanner/>}
            <h1>Search</h1>
            <div className={styles.inputContainer}>
                <input type="text" placeholder='Start searching...' value={search} onChange={({target}) =>{setSearch(target.value); search && searchDashpost({variables:{title: search}})}}/>
              { loading && <div className={styles.loading}></div>}
            </div>
           {!search && <p>Start typing to search for news</p>}
         {data && search &&<div className={styles.searchDashpost}>{data.searchDashpost.length > 0 && <PostList dashPosts={data.searchDashpost} title='Search result'/>}</div>}
        </div>
    )
}