import styles from './Banner.module.scss'

const Banner = () => {

    return (
        <section className={styles.container}>
            <article className={styles.info}>
                <h2 className={styles.title}>Ready to Transform Your Digital Presence?</h2>
                <p className={styles.description}>
                    Take the first step towards digital success with NexGen by your side.
                    Our team of experts is eager to craft tailored solutions that drive growth for your business.
                </p>
            </article>

            <button className={styles.button}>
                <span>Get in Touch</span>
                <img src={'./icons/button-arrow.svg'} alt={"button"} />
            </button>
        </section>
    )
}

export default Banner;
