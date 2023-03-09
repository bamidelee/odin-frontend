import { useEffect, useRef } from 'react'
export default function Banner() {
    const banner = useRef()

    const atOptions = {
        key: '1d24a5888bd79927cba80711f10c599a',
        format: 'iframe',
        height: 250,
        width: 300,
        params: {},
    }
    useEffect(() => {
    if (!banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.profitabledisplaynetwork.com/1d24a5888bd79927cba80711f10c599a/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        if (banner.current) {
            banner.current.append(conf)
            banner.current.append(script)
        }
    }
}, [])

    return <div className='ads' ref={banner}></div>
}