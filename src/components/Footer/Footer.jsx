import styles from "./Footer.module.css";

export default function Footer(){
    return(
        <div className={styles.container}>
            <nav className={styles.footer}>
                <div className={styles.title}>
                    <p className={styles.footer__brand}>Covid App</p>
                    <h1>Developed by Nabil</h1>
                </div>
                <div>
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__item}>Global</li>
                        <li className={styles.footer__item}>Indonesia</li>
                        <li className={styles.footer__item}>Provinsi</li>
                        <li className={styles.footer__item}>About</li>
                    </ul>
                </div>      
            </nav>
        </div>
    )
}