import { useEffect } from "react"
export default function GoogleAds({currentPath, slot}) {
    useEffect(() => {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }, [currentPath])

    return(
        <div key={currentPath} style={{ textAlign: 'left', overflow: 'hidden' }}>
        <span style={{ fontSize: '12px' }}>Advertisment</span>
        { /*START horizonalAds Google Adsense */ }
            <ins className="adsbygoogle"
                style={{display: 'block'}}
                data-ad-client= 'ca-pub-9120505021602496'
                data-ad-slot={slot}
                data-ad-format="auto"
                data-full-width-responsive="true"
            >
            </ins>
        { /* END horizonalAds Google Adsense */ }

        </div>
    )
}