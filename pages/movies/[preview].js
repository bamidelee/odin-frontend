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
               {mobileBanner &&  <div className="ads"><iframe data-aa='2226984' src='//ad.a-ads.com/2226984?size=320x100'  style={{width:'320px', height:'100px', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe></div>}
            </ClientOnly>

            <ClientOnly>
               {!mobileBanner &&  <div className="ads"><iframe data-aa='2226990' src='//ad.a-ads.com/2226990?size=728x90'  style={{width:'728px', height:'90px', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe></div>}
            </ClientOnly>
           


            <ClientOnly>
                <MoviePreview movie={movie} />
            </ClientOnly>

            <ClientOnly>
               {mobileBanner &&  <div className="ads"><iframe ddata-aa='2226993' src='//ad.a-ads.com/2226993?size=336x280'   style={{width:'336px', height:'280px', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe></div>}
            </ClientOnly>

            <ClientOnly>
               {!mobileBanner &&  <div className="ads"><iframe data-aa='2226997' src='//ad.a-ads.com/2226997?size=728x90'  style={{width:'728px', height:'90px', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe></div>}
            </ClientOnly>

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
