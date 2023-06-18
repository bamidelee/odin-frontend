import MoviePreview from "../../components/movie/moviePreview";
import { FIND_SERIES } from '../../components/quarries';
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
               {  <div className="ads"><iframe  data-aa='2227065' src='//acceptable.a-ads.com/2227065' style={{width:'100%', height:'100%', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe></div>}
            </ClientOnly>
           

            <ClientOnly>
                <MoviePreview movie={movie} />
            </ClientOnly>

            <ClientOnly>
               {  <div className="ads"><iframe  data-aa='2227065' src='//acceptable.a-ads.com/2227065' style={{width:'100%', height:'100%', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe></div>}
            </ClientOnly>
           
        </div>
    )
}


export async function getStaticProps({ params }) {
    const { preview } = params
    const { data } = await client.query({ query: FIND_SERIES, variables: { id: preview } });
    return {
        props: {

            movie: data.findSeries
        },

    };
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking', // can also be true or 'blocking'
    }
}
