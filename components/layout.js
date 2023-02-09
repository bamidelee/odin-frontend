import Header from "./header";
import { useRef, useState, useEffect } from "react";
import useMouse from '@react-hook/mouse-position'
import SideBar from "./sidebar";
import { AppWrapper } from '../context/appContext';
import Footer from "./footer";
import GoogleAds from "./googleAds";



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
                <GoogleAds currentPath ='layout1' slot='4345008888'/><GoogleAds currentPath ='layout1' slot='4345008888'/>
                    {children}
                </main>
                <GoogleAds currentPath ='layout2' slot = '4345008888'/>
                <Footer/>
            </AppWrapper>
        </>
    )
}

