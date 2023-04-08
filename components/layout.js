import Header from "./header";
import { useRef, useState, useEffect } from "react";
import useMouse from '@react-hook/mouse-position'
import SideBar from "./sidebar";
import { AppWrapper } from '../context/appContext';
import Footer from "./footer";
import Script from "next/script";
import DesktopBanner from "./desktopBanner";
import Icon from '@mdi/react';
import { mdiSend } from '@mdi/js';
import Link from "next/link";
import Loading from "./loading";
import ClientOnly from "./Clientonly";



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
                {desktopBanner && <DesktopBanner slot ='8c47067f1ac7389ef98d7ba0c597c9d9'/>}
                <Link href='https://t.me/thenaijaodin' className="telegram">
                <Icon path={mdiSend} size={1.5} />
                  Join our telegram channel
                </Link>
                    {children}
                    {desktopBanner && <DesktopBanner slot ='b025ba1d1be3acb2b5515d337ab3ebb6'/>}

                  { !desktopBanner && <DesktopBanner slot = '1d24a5888bd79927cba80711f10c599a'/>
                   }

                </main>
                <Footer/>
            </AppWrapper>
        </>
    )
}

