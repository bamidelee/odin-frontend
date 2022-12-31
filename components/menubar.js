import styles from '../styles/menubar.module.css'

function MenuBar({sideBar, setSideBar}) {

    return (
        <div className={sideBar? `${styles.menuBar} ${styles.open}`: `${styles.menuBar} ${styles.closed}`} onClick={({target}) => setSideBar(!sideBar)}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
        </div>
    )
}

export default MenuBar