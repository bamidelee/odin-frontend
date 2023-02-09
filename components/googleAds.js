import { useEffect } from "react"
export default function GoogleAds(...props) {
    const { currentPath } = props;
    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      }, [currentPath])

    return(
        <div key={currentPath}>
        { /*START horizonalAds Google Adsense */ }
            <ins className="adsbygoogle"
                style={{display: 'block'}}
                data-ad-client="ca-pub-9120505021602496"
                data-ad-slot="9297350024"
                data-ad-format="auto"
                data-full-width-responsive="true"
            >
            </ins>
        { /* END horizonalAds Google Adsense */ }

        </div>
    )
}