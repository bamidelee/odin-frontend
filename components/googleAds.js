import { useEffect, useState } from "react"
export default function GoogleAds({ slot}) {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
        
      }, [])

      useEffect(() => {
       hasMounted &&  (window.adsbygoogle = window.adsbygoogle || []).push({})
        
      }, [hasMounted])
    

    return(
        <div style={{ textAlign: 'left', overflow: 'hidden' }}>
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