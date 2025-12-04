import styles from './BannerCarousel.module.scss'

interface Props {
    large?: boolean;
}

const BannerCarousel = (props: Props) => {
    const items = [
        'MARKETING',
        'WEBSITE DESIGN',
        'BRANDING',
        'WEBSITE DEVELOPMENT',
        'MOBILE APP DEVELOPMENT',
        'DIGITAL'
    ];
    const item2 = [
        'Follow Us on Social Media',
        'Follow Us on Social Media',
        'Follow Us on Social Media',
        'Follow Us on Social Media',
        'Follow Us on Social Media',
        'Follow Us on Social Media'
    ]
    const res = props.large ? item2 : items

    return (
        <section className={`${styles.scrollContainer} ${props.large ? styles.large : ''}`}>
            <ul className={styles.scrollContent}>
                {res.map((item, index) => (
                    <li key={index} className={styles.scrollItem}>
                        {item}
                        <span className={styles.dot}>•</span>
                    </li>
                ))}

                {res.map((item, index) => (
                    <li key={`dup-${index}`} className={styles.scrollItem}>
                        {item}
                        <span className={styles.dot}></span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default BannerCarousel;
