import { useEffect, useRef } from 'react'
export default function DesktopBanner({ slot }) {
    const banner = useRef()
    const getId = (slot) => `atContainer-${slot}`;
    const atAsyncOptions = {
        key: slot,
        format: 'iframe',
        height: 90,
        width: 728,  
        params: {},
        async: true,
        container: getId(slot),
    }
    useEffect(() => {
        if (!banner.current.firstChild && slot) {
            const conf = document.createElement('script')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `//www.profitabledisplaynetwork.com/${slot}/invoke.js`
            script.async = true
            conf.innerHTML = `
        if (typeof atAsyncOptions !== 'object') var atAsyncOptions = [];
        atAsyncOptions.push(${JSON.stringify(atAsyncOptions, null, 2)});
        `
            conf.type = 'text/javascript';

            if (banner.current) {
                banner.current.append(conf)
                banner.current.append(script)
            }
        }
    }, [slot])

    return <>
        <div ref={banner} className='ads' />
        <div id={getId(slot)} className='ads' />
    </>
}