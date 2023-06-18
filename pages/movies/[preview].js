import MoviePreview from "../../components/movie/moviePreview";
import { FIND_MOVIE } from '../../components/quarries';
import ClientOnly from "../../components/Clientonly";
import client from "../../apollo-client";

import { useEffect, useState } from 'react';

import Script from "next/script";

export default function Preview({ movie }) {
    const [mobileBanner, setMobileBanner] = useState(false)

    useEffect(() => {

        if (window.innerWidth < 650) {
            setMobileBanner(true)
        }
    }, [])
    return (
        <div>
            <ClientOnly>
               {mobileBanner &&  <div className="ads"><iframe data-aa='2226984' src='//ad.a-ads.com/2226984?size=320x100' style={{width:'320px', height: '100px', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe></div>}
            </ClientOnly>
            <ClientOnly>
               {!mobileBanner &&  <div className="ads"><iframe data-aa='2226990' src='//ad.a-ads.com/2226990?size=728x90' style={{width: '728px', height:'90px', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe></div>}
            </ClientOnly>


            <ClientOnly>
                <MoviePreview movie={movie} />
            </ClientOnly>

            {!mobileBanner && <div>
                <Script async="async" data-cfasync="false" src="//pl18660884.highrevenuegate.com/1e845c512aba6f843b89be278fa82a95/invoke.js"></Script>
                <div id="container-1e845c512aba6f843b89be278fa82a95"></div>
            </div>}

            {mobileBanner && <Banner slot='1d24a5888bd79927cba80711f10c599a' />
            }

        </div>
    )
}


export async function getStaticProps({ params }) {
    const { preview } = params
    const { data } = await client.query({ query: FIND_MOVIE, variables: { id: preview } });
    return {
        props: {

            movie: data.findMovie
        },

    };
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking', // can also be true or 'blocking'
    }
}
