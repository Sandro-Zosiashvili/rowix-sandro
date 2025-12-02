import styles from './HeroSection.module.scss'
import HeroBanner from '../../HeroBanner/HeroBanner'
import BannerImage from '../../BannerImage/BannerImage'
import InfoBanner from '../../InfoBanner/InfoBanner'

const HeroSection = () => {

    return (
        <div className={styles.container}>
            <div className={styles.heroLayout}>
                <HeroBanner/>
                <BannerImage/>
            </div>
                <InfoBanner />
        </div>
    )
}

export default HeroSection;