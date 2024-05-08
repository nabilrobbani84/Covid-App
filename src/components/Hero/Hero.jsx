import Styles from "./Hero.module.css"

export default function Hero() {
    return (
        <div className={Styles.container}>
            <section className={Styles.hero}>
                <div className={Styles.left}>
                    <h2 className={Styles.hero__title}>Covid ID</h2>
                    <h3 className={Styles.hero__genre}>
                        Monitoring Perkembangan Covid
                    </h3>
                    <p className={Styles.hero__description}> Godzilla dan Kong akan melawan kekuatan baru yang sangat berbahaya. Kedua raksasa kuno itu akan menghadapi ancaman besar dari dasar bumi. Ancaman yang bisa membuat Godzilla maupun Kong punah.</p>
                    <button className={Styles.hero__botton}>Vaccine</button>
                </div>
                <div className={Styles.hero__right}>
                    <img className={Styles.hero__image} src="/images/medical.png" alt="placeholder" />
                </div>
            </section>
        </div>
    )
}