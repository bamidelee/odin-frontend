import MoviePreview from "../../components/movie/moviePreview";
import { FIND_MOVIE } from '../../components/quarries';
import ClientOnly from "../../components/Clientonly";
import client from "../../apollo-client";
import BoxBanner from '../../components/boxBanner'
import { useEffect, useState } from 'react';
import Banner from "../../components/banner";
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
                <Banner slot={mobileBanner ? '1523ac683e9630ccc8aba4793a81d92b' : '8c47067f1ac7389ef98d7ba0c597c9d9'} />
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
