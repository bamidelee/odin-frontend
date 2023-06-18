import { FIND_POST, RELATED_POST } from "../../components/quarries";
import NewsDetails from "../../components/newsDetails";
import client from "../../apollo-client";
import RelatedNews from "../../components/relatedNews";
import { useRouter } from 'next/router'
import styles from '../../styles/newsDetails.module.css'

import { useEffect, useState } from 'react';

import Script from "next/script";
import ClientOnly from "../../components/Clientonly";


export default function Post({ news, relatedNews }) {
  const [mobileBanner, setMobileBanner] = useState(false)

  useEffect(() => {

    if (window.innerWidth < 650) {
      setMobileBanner(true)
    }
  }, [])
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <ClientOnly>
        {mobileBanner && <div className="ads"><iframe data-aa='2226984' src='//ad.a-ads.com/2226984?size=320x100' style={{ width: '320px', height: '100px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}
      </ClientOnly>
      <ClientOnly>
        {!mobileBanner && <div className="ads"><iframe data-aa='2226990' src='//ad.a-ads.com/2226990?size=728x90' style={{ width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}
      </ClientOnly>

      <div className={styles.details}>
        <NewsDetails news={news} />
        {relatedNews && <RelatedNews news={relatedNews.filter(news => news._id !== id)} />}
      </div>
      <ClientOnly>
        {mobileBanner && <div className="ads"><iframe data-aa='2226993' src='//ad.a-ads.com/2226993?size=336x280' style={{ width: '336px', height: '280px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}
      </ClientOnly>
      <ClientOnly>
        {!mobileBanner && <div className="ads"><iframe data-aa='2226997' src='//ad.a-ads.com/2226997?size=728x90' style={{ width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}
      </ClientOnly>


    </div>
  )
}

export async function getStaticProps({ params }) {

  const { id } = params
  const { data } = await client.query({ query: FIND_POST, variables: { id: id } });
  const { data: relatedNews } = await client.query({ query: RELATED_POST, variables: { genre: data.findPost ? data.findPost.genre[1] : null } })
  if (!data.findPost) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      news: data.findPost,
      relatedNews: relatedNews.relatedPost
    },

  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking', // can also be true or 'blocking'
  }
}