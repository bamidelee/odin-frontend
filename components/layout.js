import Header from "./header";
import { useRef, useState, useEffect } from "react";
import useMouse from '@react-hook/mouse-position'
import SideBar from "./sidebar";
import { AppWrapper } from '../context/appContext';
import Footer from "./footer";
import Script from "next/script";
import Banner from "./banner";




export default function Layout ({children}) {


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
                <SideBar sideBar={sideBar} setSideBar = {setSideBar}/>
                <main ref={ref} style={{paddingTop: '4rem'}} onClick = {(() => setSideBar(false))}>
                <Banner/>
                    {children}

                    <Script
      async 
      src="https://zvwhrc.com/na/waWQiOjExNDkzMzMsInNpZCI6MTE5MDA5Miwid2lkIjo0MzMwNDEsInNyYyI6Mn0=eyJ.js"
      strategy="afterInteractive"
      />
     

                </main>
                <Footer/>
            </AppWrapper>
        </>
    )
}

