import styles from './FooterSection.module.scss'
import SocialMediaItem from "@/app/components/SocialMediaItem/SocialMediaItem";
import FooterInfo from "@/app/components/FooterInfo/FooterInfo";
import SubscribeFooter from "@/app/components/SubscribeFooter/SubscribeFooter";
import PrivacyPolicy from "@/app/components/PrivacyPolicy/PrivacyPolicy";


const FooterSection = () => {


    return (
        <section className={styles.container}>
            <div className={styles.socialMedia}>
                <SocialMediaItem icon={'instagram-icon.svg'} title={'INSTAGRAM'}
                                 description={'Share visually appealing snippets of our latest web projects.'}/>
                <SocialMediaItem icon={'twitter.svg'} title={'Twitter'}
                                 description={'Tweet about interesting coding challenges you\'ve overcome.'}/>
                <SocialMediaItem icon={'dribble.svg'} title={'Dribbble'}
                                 description={'Showcase design elements of our web projects.'}/>
                <SocialMediaItem icon={'be.svg'} title={'Behance'}
                                 description={'Showcase design elements of our web projects.'}/>

            </div>
            <div className={styles.wrapper}>
                <FooterInfo />
                <SubscribeFooter />
                <PrivacyPolicy/>

            </div>

        </section>
    )
}


export default FooterSection;