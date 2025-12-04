'use client'
import { useEffect, useRef } from 'react'
import styles from './HeroSection.module.scss'
import HeroBanner from '../../HeroBanner/HeroBanner'
import BannerImage from '../../BannerImage/BannerImage'
import InfoBanner from '../../InfoBanner/InfoBanner'

const HeroSection = () => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        ref.current?.classList.add(styles.show)
    }, [])

    return (
        <section ref={ref} className={`${styles.container} ${styles.fadeUp}`}>
            <div className={styles.heroLayout}>
                <HeroBanner/>
                <BannerImage/>
            </div>
            <InfoBanner />
        </section>
    )
}

export default HeroSection