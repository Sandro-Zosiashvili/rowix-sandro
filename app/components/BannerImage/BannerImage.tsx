import styles from './BannerImage.module.scss'

const BannerImage = () => {


    return (
        <div className={styles.container}>
            <div className={styles.bannerImage}>
                <img  src={'./images/image.svg'} alt={"banner image"}/>
                <img  className={styles.ButtonStart} src={'./images/startButtonSecond.svg'} alt={"banner image"}  />
            </div>
            <div className={styles.bannerFooter}>
                fvdcx
            </div>
        </div>
    )
}

export default BannerImage;