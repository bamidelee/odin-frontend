import { useEffect, useRef } from 'react'
export default function Banner() {
    const banner = useRef()

    const atOptions = {
        key: '8c47067f1ac7389ef98d7ba0c597c9d9',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {},
    }
    useEffect(() => {
    if (!banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.profitabledisplaynetwork.com/8c47067f1ac7389ef98d7ba0c597c9d9/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        if (banner.current) {
            banner.current.append(conf)
            banner.current.append(script)
        }
    }
}, [])

    return <div className='ads' ref={banner}></div>
}