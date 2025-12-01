import Image from "next/image";
import Menu from "@/app/components/Menu/Menu";
import styles from './page.module.css'
import HeadTitle from "@/app/components/HeadTitle/HeadTitle";
import Button from "@/app/components/Button/Button";
import MenuItem from "@/app/components/MenuItem/MenuItem";
import Header from "@/app/components/Header/Header";
import HeroBanner from "@/app/components/HeroBanner/HeroBanner";
import StartButton from "@/app/components/StartButton/StartButton";
import BannerImage from "@/app/components/BannerImage/BannerImage";

export default function Home() {
    return (
        <div className={styles.page}>
            <Header />
            {/*<HeroBanner />*/}
            <BannerImage />
        </div>
    );
}
