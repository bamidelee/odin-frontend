import Header from "./header";
import { useRef, useState, useEffect } from "react";
import useMouse from '@react-hook/mouse-position'
import SideBar from "./sidebar";
import { AppWrapper } from '../context/appContext';
import Footer from "./footer";
import Script from "next/script";

import Icon from '@mdi/react';
import { mdiSend } from '@mdi/js';
import Link from "next/link";
import Loading from "./loading";
import ClientOnly from "./Clientonly";




export default function Layout({ children }) {

  const [bigScreen, setBigScreen] = useState(false)

  useEffect(() => {

    if (window.innerWidth > 650 ) {
      setBigScreen(true)
    }
  },[])


  const [sideBar, setSideBar] = useState(false)
  const ref = useRef(null)
  const mouse = useMouse(ref.current, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  return (
    <>
      <AppWrapper >
        <Header mouseX={mouse.x} sideBar={sideBar} setSideBar={setSideBar} />
        <Loading />
        <SideBar sideBar={sideBar} setSideBar={setSideBar} />

       

        <main className="main" ref={ref} style={{ paddingTop: '4rem'}} onClick={(() => setSideBar(false))}>
        
        

          <Link href='https://t.me/thenaijaodin' target="blank" ><div className="glowContainer"><button class='glowing-btn'><span class='glowing-txt'>JOIN<span class='faulty-letter'>OUR</span>TELEGRAM CHANNEL</span></button></div></Link>

          {children}
        

        </main>
        <Footer />
      </AppWrapper>
    </>
  )
}

