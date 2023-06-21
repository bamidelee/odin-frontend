import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiTwitter, mdiInstagram, mdiMail } from '@mdi/js';
import styles from '../styles/footer.module.css'

export default function Footer() {


    return (
        <div className={styles.footer}>
            <h2>
                Follow us
            </h2>
            <div className={styles.socials}>
                <div class={styles.container}>
                    <Link href='https://twitter.com/thenaijaodin' target='blank' class={styles.button}>
                        <div class={styles.plate}></div>
                        <div class={styles.plate}></div>
                        <div class={styles.plate}></div>
                        <div class={styles.plate}></div>
                        <div class={styles.plate}></div>
                        <div class={styles.button__wrapper}>
                            <span class={styles.button__text}> <Icon path={mdiTwitter} size={1.5} />Twitter</span>
                        </div>
                        <div class={styles.button__box}>
                            <div class={`${styles.inner} ${styles.inner__top}`}></div>
                            <div class={`${styles.inner} ${styles.inner__front}`}></div>
                            <div class={`${styles.inner} ${styles.inner__bottom}`}></div>
                            <div class={`${styles.inner} ${styles.inner__back}`}></div>
                            <div class={`${styles.inner} ${styles.inner__left}`}></div>
                            <div class={`${styles.inner} ${styles.inner__right}`}></div>
                        </div>
                    </Link>
                </div>

                <div class={styles.container}>
                    <Link href='https://www.instagram.com/naijaodin/' target='blank' class={styles.button}>
                        <div class={styles.plate}></div>
                        <div class={styles.plate}></div>
                        <div class={styles.plate}></div>
                        <div class={styles.plate}></div>
                        <div class={styles.plate}></div>
                        <div class={styles.button__wrapper}>
                            <span class={styles.button__text}> <Icon path={mdiInstagram} size={1.5} />Instagram</span>
                        </div>
                        <div class={styles.button__box}>
                            <div class={`${styles.inner} ${styles.inner__top}`}></div>
                            <div class={`${styles.inner} ${styles.inner__front}`}></div>
                            <div class={`${styles.inner} ${styles.inner__bottom}`}></div>
                            <div class={`${styles.inner} ${styles.inner__back}`}></div>
                            <div class={`${styles.inner} ${styles.inner__left}`}></div>
                            <div class={`${styles.inner} ${styles.inner__right}`}></div>
                        </div>
                    </Link>
                </div>
                {/*<div>
                    <Link href='https://twitter.com/thenaijaodin' target='blank'>
                        <Icon path={mdiTwitter} size={1.5} color='var(--fontGold)' />
                        <h3>Twitter:</h3>
                        <p>Thenaijaodin</p>
                    </Link>
                    <Link href='https://www.instagram.com/naijaodin/' target='blank'>
                        <Icon path={mdiInstagram} size={1.5} color='var(--fontGold)' />
                        <h3>Instagram:</h3>
                        <p>Naijaodin</p>
                    </Link>
    </div>*/}
            </div>
            <div className={styles.mail}>
                <Icon path={mdiMail} size={1.5} color='var(--fontGold)' />
                <h3>E-mail:</h3>
                <p>Naijaodin@gmail.com</p>
            </div>
            <p>Copyright © NAIJAODIN </p>
        </div>
    )
}