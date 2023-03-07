import Header from "./header";
import { useRef, useState, useEffect } from "react";
import useMouse from '@react-hook/mouse-position'
import SideBar from "./sidebar";
import { AppWrapper } from '../context/appContext';
import Footer from "./footer";




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
                
<iframe class="na" frameborder="0" scrolling="no" width="300" height="100" sandbox="allow-scripts allow-popups allow-forms allow-same-origin" src="//a.labadena.com/api/spots/428460?p=1&s1=%subid1%&kw="></iframe>

                    {children}
                </main>
                <Footer/>
            </AppWrapper>
        </>
    )
}

