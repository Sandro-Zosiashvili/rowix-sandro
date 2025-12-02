import styles from './page.module.css'
import HeroSection from './components/sections/HeroSection/HeroSection'
import ReasonsSection from "@/app/components/sections/ReasonsSection/ReasonsSection";
import ServicesSection from './components/sections/ServicesSection/ServicesSection'
import WorksSection from "@/app/components/sections/WorksSection/WorksSection";

export default function Home() {
    return (
        <div className={styles.page}>
            <WorksSection/>
            <HeroSection/>
            <ReasonsSection/>
            <ServicesSection/>
        </div>
    );
}
