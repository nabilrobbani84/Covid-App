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
                    <p className={Styles.hero__description}>"Kunjungi website COVID kami untuk pembaruan terbaru dan sumber daya penting dalam menghadapi pandemi ini. Bersama-sama, kita dapat melawan COVID-19!"</p>
                    <button className={Styles.hero__botton}>Vaccine</button>
                </div>
                <div className={Styles.hero__right}>
                    <img className={Styles.hero__image} src="/images/medical.png" alt="placeholder" />
                </div>
            </section>
        </div>
    )
}