import styles from './BannerCarousel.module.scss'

const BannerCarousel = () => {
    const items = [
        'MARKETING',
        'WEBSITE DESIGN',
        'BRANDING',
        'WEBSITE DEVELOPMENT',
        'MOBILE APP DEVELOPMENT',
        'DIGITAL'
    ];

    return (
        <div className={styles.scrollContainer}>
            <div className={styles.scrollContent}>
                {items.map((item, index) => (
                    <span key={index} className={styles.scrollItem}>
            {item}
                        <span className={styles.dot}>•</span>
          </span>
                ))}
                {items.map((item, index) => (
                    <span key={`dup-${index}`} className={styles.scrollItem}>
            {item}
                        <span className={styles.dot}></span>
          </span>
                ))}
            </div>
        </div>
    );
};

export default BannerCarousel;