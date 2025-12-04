import styles from './page.module.css'
import HeroSection from './components/sections/HeroSection/HeroSection'
import ReasonsSection from "@/app/components/sections/ReasonsSection/ReasonsSection";
import ServicesSection from './components/sections/ServicesSection/ServicesSection'
import WorksSection from "@/app/components/sections/WorksSection/WorksSection";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection/TestimonialsSection";
import QuestionsSection from "@/app/components/sections/QuestionsSection/QuestionsSection";
import Banner from "@/app/components/Banner/Banner";
import BannerCarousel from "@/app/components/BannerCarousel/BannerCarousel";
import FooterSection from "@/app/components/sections/FooterSection/FooterSection";

export default function Home() {
    return (
        <div className={styles.page}>
            <HeroSection/>
            <ReasonsSection/>
            <ServicesSection/>
            <WorksSection/>
            <TestimonialsSection/>
            <QuestionsSection/>
            <Banner/>
            <BannerCarousel large/>
            <FooterSection />
        </div>
    );
}

