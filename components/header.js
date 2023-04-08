import style from '../styles/header.module.css'
import { useEffect, useState } from 'react'
import MenuBar from './menubar'
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import Link from 'next/link';

export default function Header({ mouseX, sideBar, setSideBar }) {
    const [mousePos, setMousePos] = useState('')
    const eyeStyle = {
        transform: `translate(${mousePos * 0.006}px, 1rem)`
    }
    useEffect(() => {
        setMousePos(mouseX)
    }, [mouseX])

    return (
        <div className={style.header}>
            <div>
                <MenuBar sideBar={sideBar} setSideBar={setSideBar} />
            </div>
            <div className={style.headerName}>
                <div className={style.eyeContainer}>
                    <div className={style.eyeFrame}>
                        <div className={style.eyeLid} style={eyeStyle}></div>
                    </div>
                    <div className={style.eyeFrame}>
                        <div className={style.eyeLid} style={eyeStyle}></div>
                    </div>
                </div>
                <h1>
                    <span>NAIJA</span>ODIN
                </h1>
            </div>
            <Link href='/search' className={style.search}>
                <Icon path={mdiMagnify} size={1.3} color='var(--fontGold)' />
            </Link>
        </div>
    )
}