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
                {mobileBanner && <div className="ads"><iframe data-aa='2226984' src='//ad.a-ads.com/2226984?size=320x100' style={{ width: '320px', height: '100px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}
            </ClientOnly>

            <ClientOnly>
                {mobileBanner && <div className="ads"><iframe src="https://cybertronads.com/platform/show.php?z=-1&pl=2255" width="320" height="50" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe></div>}
            </ClientOnly>

            <ClientOnly>
                {!mobileBanner && <div className="ads"><iframe data-aa='2226990' src='//ad.a-ads.com/2226990?size=728x90' style={{ width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}
            </ClientOnly>
            <ClientOnly>
                {!mobileBanner && <div className="ads"><iframe src="https://cybertronads.com/platform/show.php?z=-1&pl=2254" width="728" height="90" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe></div>}
            </ClientOnly>

            <ClientOnly>
                <MoviePreview movie={movie} />
            </ClientOnly>

            <ClientOnly>
                {mobileBanner && <div className="ads"><iframe src="https://cybertronads.com/platform/show.php?z=-1&pl=2256" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>
                </div>}
            </ClientOnly>

            <ClientOnly>
                {!mobileBanner && <div className="ads"><iframe data-aa='2226997' src='//ad.a-ads.com/2226997?size=728x90' style={{ width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}
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
