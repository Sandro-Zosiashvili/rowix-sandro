import styles from './HeroBanner.module.scss'
import BannerTitle from "@/app/components/BannerTitle/BannerTitle";
import Description from "@/app/components/Description/Description";
import BannerCarousel from "@/app/components/BannerCarousel/BannerCarousel";
import StartButton from "@/app/components/StartButton/StartButton";


const HeroBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.fontWrapper}>
                    <BannerTitle title={" DIGITAL SOLUTIONS THAT DRIVE SUCCESS"} size={4.0625}/>
                    <div className={styles.startButton}>
                        <StartButton />
                    </div>
                </div>
                <div className={styles.descriptionWrapper}>
                    <Description
                        color={'gray'}
                        title={"At NexGen, we believe in the transformative power of digital solutions. " +
                            "Our team of experts is dedicated to helping businesses like yours thrive in the" +
                            " fast-paced digital landscape."}/>
                </div>
            </div>
            <div className={styles.carousel}>
                <BannerCarousel/>
            </div>


        </div>
    )
}

export default HeroBanner