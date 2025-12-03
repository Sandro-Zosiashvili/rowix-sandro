import styles from './page.module.css'
import HeroSection from './components/sections/HeroSection/HeroSection'
import ReasonsSection from "@/app/components/sections/ReasonsSection/ReasonsSection";
import ServicesSection from './components/sections/ServicesSection/ServicesSection'
import WorksSection from "@/app/components/sections/WorksSection/WorksSection";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection/TestimonialsSection";
import QuestionsSection from "@/app/components/sections/QuestionsSection/QuestionsSection";

export default function Home() {
    return (
        <div className={styles.page}>
            <HeroSection/>
            <ReasonsSection/>
            <ServicesSection/>
            <WorksSection/>
            <TestimonialsSection/>
            <QuestionsSection/>

        </div>
    );
}

