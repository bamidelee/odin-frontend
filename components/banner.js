import { useEffect, useRef } from 'react'
export default function Banner() {
    const banner = useRef()

    const atOptions = {
        key: 'b025ba1d1be3acb2b5515d337ab3ebb6',
        format: 'iframe',
        height: 60,
        width: 468,
        params: {},
    }
    useEffect(() => {
    if (!banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.profitabledisplaynetwork.com/b025ba1d1be3acb2b5515d337ab3ebb6/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        if (banner.current) {
            banner.current.append(conf)
            banner.current.append(script)
        }
    }
}, [])

    return <div className='ads' ref={banner}></div>
}