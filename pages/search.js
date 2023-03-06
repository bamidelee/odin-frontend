import PostList from "../components/postList";
import { useLazyQuery } from "@apollo/client"
import { SEARCH_DASHPOST } from "../components/quarries";
import { useState, useEffect } from 'react';
import styles from '../styles/search.module.css'

export default function Search(){
    const [search, setSearch] = useState('')
    const [searchDashpost, { data, loading, error }] = useLazyQuery(SEARCH_DASHPOST);

    return(
        <div className={styles.search}>
            <h1>Search</h1>
            <div className={styles.inputContainer}>
                <input type="text" placeholder='Start searching...' value={search} onChange={({target}) =>{setSearch(target.value); search && searchDashpost({variables:{title: search}})}}/>
              { loading && <div className={styles.loading}></div>}
            </div>
           {!search && <p>Start typing to search for news</p>}
         {data && <div className={styles.searchDashpost}>{data.searchDashpost.length > 0 && <PostList dashPosts={data.searchDashpost} title='Search result'/>}</div>}
        </div>
    )
}