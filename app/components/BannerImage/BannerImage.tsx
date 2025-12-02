import styles from './BannerImage.module.scss'
import Description from "@/app/components/Description/Description";

const BannerImage = () => {


    return (
        <div className={styles.container}>
            <div className={styles.bannerImage}>
                <img className={styles.mainBannerImage} src={'./images/image.svg'} alt={"banner image"}/>
                <img className={styles.ButtonStart} src={'./images/startButtonSecond.svg'} alt={"banner image"}/>
            </div>
            <div className={styles.bannerFooter}>
                <p className={styles.bannerTitle}>ESTATEIN REAL ESTATE</p>
                <Description color={"lightGray"} title={"Web Development"}/>
            </div>
        </div>
    )
}

export default BannerImage;