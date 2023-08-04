import MoviePreview from "../../components/movie/moviePreview";
import { FIND_MOVIE, ALSO_SEE_MOVIES } from '../../components/quarries';
import ClientOnly from "../../components/Clientonly";
import client from "../../apollo-client";
import DashCard from "../../components/dashCard";

import { useEffect, useState } from 'react';

import Script from "next/script";

export default function Preview({ movie, alsoSee }) {
    const [mobileBanner, setMobileBanner] = useState(false)
    console.log(alsoSee)
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
                {mobileBanner && <div className="ads"><iframe src="https://cybertronads.com/platform/show.php?z=31&pl=2331" width="320" height="50" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe></div>}
            </ClientOnly>

            <ClientOnly>
                {!mobileBanner && <div className="ads"><iframe data-aa='2226990' src='//ad.a-ads.com/2226990?size=728x90' style={{ width: '728px', height: '90px', border: '0px', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}></iframe></div>}
            </ClientOnly>

            <ClientOnly>
                {!mobileBanner && <div className="ads"><iframe src="https://cybertronads.com/platform/show.php?z=29&pl=2332" width="728" height="90" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe></div>}
            </ClientOnly>



            <ClientOnly>
                <MoviePreview movie={movie} alsoSee={alsoSee}/>
            </ClientOnly>

            <ClientOnly>
                {mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5320&reqin=iframe&w=300&h=250&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '300px', height: '250px' }}></iframe></div>}
            </ClientOnly>

            <ClientOnly>
                {!mobileBanner && <div className="ads"><iframe src="https://ads.dochaseadx.com/adx-dir-d/AdDecision?aid=5310&reqin=iframe&w=728&h=90&adpos=atf&nid=13&cb=&ref=&adx_custom=" frameborder="0" scrolling="no" style={{ width: '728px', height: '90px' }}></iframe></div>}
            </ClientOnly>


        </div>
    )
}


export async function getStaticProps({ params }) {
    const { preview } = params
    const { data } = await client.query({ query: FIND_MOVIE, variables: { id: preview } });
    const { data:alsoSee } = await client.query({ query: ALSO_SEE_MOVIES });
    return {
        props: {

            movie: data.findMovie,
            alsoSee: alsoSee.alsoSeeMovie
        },

    };
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking', // can also be true or 'blocking'
    }
}
