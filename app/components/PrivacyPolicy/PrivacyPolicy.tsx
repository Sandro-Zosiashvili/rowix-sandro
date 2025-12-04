import styles from './PrivacyPolicy.module.scss';


const PrivacyPolicy = () => {
    return (
        <div className={styles.container}>
            <p className={styles.leftContent}>© 2024 NextGen. All rights reserved.</p>
            <div className={styles.rightContent}>
                <p>Terms & Conditions</p>
                <div className={styles.line}></div>
                <p>Privacy Policy</p>
            </div>
        </div>
    )
}


export default PrivacyPolicy;