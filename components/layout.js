import Header from "./header";
import { useRef, useState, useEffect } from "react";
import useMouse from '@react-hook/mouse-position'
import SideBar from "./sidebar";
import { AppWrapper } from '../context/appContext';
import Footer from "./footer";
import Script from "next/script";
import DesktopBanner from "./desktopBanner";
import BoxBanner from '../components/boxBanner'
import Icon from '@mdi/react';
import { mdiSend } from '@mdi/js';
import Link from "next/link";
import Loading from "./loading";
import ClientOnly from '../components/Clientonly'



export default function Layout ({children}) {

    const [desktopBanner, setDesktopBanner] = useState(false)

    useEffect(() => {
    
      if(window.innerWidth > 650){
        setDesktopBanner(true)
      }
    },[])

    const [sideBar, setSideBar] = useState(false)
    const ref = useRef(null)
    const mouse = useMouse(ref.current, {
      enterDelay: 100,
      leaveDelay: 100,
    })

    return(
        <>
            <AppWrapper>
                <Header mouseX={mouse.x} sideBar={sideBar} setSideBar={setSideBar}/>
                <Loading/>
                <SideBar sideBar={sideBar} setSideBar = {setSideBar}/>

                <main ref={ref} style={{paddingTop: '4rem', width: '100%'}} onClick = {(() => setSideBar(false))}>
                {desktopBanner && <DesktopBanner/>}
                <Link href='https://t.me/thenaijaodin' className="telegram">
                <Icon path={mdiSend} size={1.5} />
                  Join our telegram channel
                </Link>
                    {children}
                 <div>
                   <Script type = 'text/javascript' src = {`//www.profitabledisplaynetwork.com/1d24a5888bd79927cba80711f10c599a/invoke.js`}></Script>
              
                 </div>
                  { !desktopBanner &&<div>
                    <Script
                    async
                    type="application/javascript" src="https://a.exdynsrv.com/ad-provider.js"
                    strategy="afterInteractive"
                    />
                        { <div className="ads"><ins class="adsbyexoclick" data-zoneid="4935076"></ins> </div>}
                    
                    <Script id="banner1">{`(AdProvider = window.AdProvider || []).push({"serve": {}});`}</Script>
                  </div>
                   }

                    { desktopBanner &&<div>
                    <Script
                    async
                    type="application/javascript" src="https://a.exdynsrv.com/ad-provider.js"
                    strategy="afterInteractive"
                    />
                        { <div className="ads"> <ins class="adsbyexoclick" data-zoneid="4935098"></ins>  </div>}
                    
                    <Script id="banner2">{`(AdProvider = window.AdProvider || []).push({"serve": {}});`}</Script>
                  </div>
                   }

                </main>
                <Footer/>
            </AppWrapper>
        </>
    )
}

