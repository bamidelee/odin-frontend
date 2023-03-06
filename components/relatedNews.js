import styles from '../styles/dashCard.module.css'
import PostList from './postList';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNow'
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';


export default function RelatedNews({news}){
   

    return(
        <div>
            {news.length > 0 && <PostList dashPosts={news.slice(0,5)} title ='Related news' replace = {true}/>}
        </div>
    )
}