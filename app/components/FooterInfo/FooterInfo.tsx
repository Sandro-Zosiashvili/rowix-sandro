import styles from './FooterInfo.module.scss'
import FooterInfoItem from "@/app/components/FooterInfoItem/FooterInfoItem";

const FooterInfo = () => {

    return (
        <nav className={styles.container}>
            <FooterInfoItem
                title="Home"
                items={["why us", "About Us", "Testimonials", "FAQ's"]}
            />
            <FooterInfoItem
                title="Services"
                items={["Web Development", "App Development", "Web Design", "Digital Marketing"]}
            />
            <FooterInfoItem
                title="Projects"
                items={["Klothink", "Zenith", "Novus", "Apex"]}
            />
            <FooterInfoItem
                title="Blogs"
                items={["Business", "Design", "Development"]}
                badges={{
                    "Design": "Soon",
                    "Development": "Soon"
                }}
            />
        </nav>
    )
}

export default FooterInfo;
