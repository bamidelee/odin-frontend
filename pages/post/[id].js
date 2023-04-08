import { FIND_POST, RELATED_POST } from "../../components/quarries";
import NewsDetails from "../../components/newsDetails";
import client from "../../apollo-client";
import RelatedNews from "../../components/relatedNews";
import { useRouter } from 'next/router'
import styles from '../../styles/newsDetails.module.css'
import BoxBanner from '../../components/boxBanner'
import { useEffect, useState } from 'react';
import Banner from "../../components/banner";
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
        <Banner slot={mobileBanner ? '1523ac683e9630ccc8aba4793a81d92b' : '8c47067f1ac7389ef98d7ba0c597c9d9'} />
      </ClientOnly>

      <div  className={styles.details}>
        <NewsDetails news={news} />
        {relatedNews && <RelatedNews news={relatedNews.filter(news => news._id !== id)} />}
      </div>
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