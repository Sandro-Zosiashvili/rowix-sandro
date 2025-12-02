import styles from './WorksItem.module.scss'
import Button from '../Button/Button'

const WorksItem = () => {

    return (

        <div className={styles.container}>
            <div className={styles.headerWrapper}>
                <div className={styles.leftHeaderWrapper}>
                    <Button type={"cube"} icon={"Magic-Stick.svg"}/>
                    <p className={styles.title}>Zenith Fitness App</p>
                </div>
                <div className={styles.moreInfoWrapper}>
                    <Button type={"link"} icon={"arrow.svg"}/>
                    <p className={styles.moreDetails}>Details</p>
                </div>
            </div>
            <div className={styles.worksInfo}>
                <div className={styles.worksInfoWrapper}>
                    <p className={styles.infoCategory}>Category</p>
                    <div className={styles.dot}></div>
                    <p className={styles.infoTitle}>Mobile App Development</p>
                </div>
                <div className={styles.worksInfoWrapperSecond}>
                    <p className={styles.infoCategory}>Time Taken</p>
                    <div className={styles.dot}></div>
                    <p className={styles.infoTitle}>6 months</p>
                </div>
            </div>

        </div>
    )
}

export default WorksItem;