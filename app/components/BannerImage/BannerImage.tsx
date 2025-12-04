import styles from './BannerImage.module.scss'
import Description from "@/app/components/Description/Description";

const BannerImage = () => {

    return (
        <section className={styles.container}>
            <figure className={styles.bannerImage}>
                <img
                    className={styles.mainBannerImage}
                    src={'./images/image.svg'}
                    alt="banner image"
                />

                <img
                    className={styles.ButtonStart}
                    src={'./images/startButtonSecond.svg'}
                    alt=""
                    aria-hidden="true"
                />
            </figure>

            <footer className={styles.bannerFooter}>
                <p className={styles.bannerTitle}>ESTATEIN REAL ESTATE</p>
                <Description color={"lightGray"} title={"Web Development"} />
            </footer>
        </section>
    )
}

export default BannerImage;
