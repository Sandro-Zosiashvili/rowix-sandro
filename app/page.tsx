import styles from './page.module.css'
import HeroSection from './components/sections/HeroSection/HeroSection'

export default function Home() {
    return (
        <div className={styles.page}>
            <HeroSection />
        </div>
    );
}
