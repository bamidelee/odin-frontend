import { useEffect, useRef } from 'react'
export default function Banner() {
    const banner = useRef()

    const atOptions = {
        key: '1523ac683e9630ccc8aba4793a81d92b',
        format: 'iframe',
        height: 50,
        width: 320,
        params: {},
    }
    useEffect(() => {
    if (!banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.profitabledisplaynetwork.com/1523ac683e9630ccc8aba4793a81d92b/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        if (banner.current) {
            banner.current.append(conf)
            banner.current.append(script)
        }
    }
}, [])

    return <div className='ads' ref={banner}></div>
}