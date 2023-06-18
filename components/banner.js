import { useEffect, useRef } from 'react'
export default function Banner({ slot }) {
    const banner = useRef()
    const getId = (slot) => `atContainer-${slot}`;
    const atAsyncOptions = {
        key: slot,
        format: 'iframe',
        height: 50,
        width: 320,
        params: {},
        async: true,
        container: getId(slot),
    }
    /*useEffect(() => {
        if (!banner.current.firstChild) {
            const conf = document.createElement('script')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `//www.profitabledisplaynetwork.com/${slot}/invoke.js`
            script.async = true
            conf.type = 'text/javascript';
            conf.innerHTML = `
        if (typeof atAsyncOptions !== 'object') var atAsyncOptions = [];
        atAsyncOptions.push(${JSON.stringify(atAsyncOptions, null, 2)});
        `

            if (banner.current) {
                banner.current.append(conf)
                banner.current.append(script)
            }
        }
    }, [slot])*/

    return(
        <></>
    )

   /* return <>
        <div ref={banner} className='ads' />
        <div id={getId(slot)} className='ads' />
    </>*/
}