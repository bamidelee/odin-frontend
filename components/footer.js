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
            </div>
            <div className={styles.mail}>
                <Icon path={mdiMail} size={1.5} color='var(--fontGold)' />
                <h3>E-mail:</h3>
                <p>Naijaodin@gmail.com</p>
            </div>
        </div>
    )
}