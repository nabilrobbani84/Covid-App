import styles from "../Navbar/Navbar.module.css"

export default function Navbar(){
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h2 className={styles.navbar__brand}>Covid App</h2>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>Global</li>
                        <li className={styles.navbar__item}>Indonesia</li>
                        <li className={styles.navbar__item}>Provinsi</li>
                        <li className={styles.navbar__item}>About</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}