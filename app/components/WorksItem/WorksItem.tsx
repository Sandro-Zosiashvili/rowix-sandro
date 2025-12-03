import styles from './WorksItem.module.scss'
import Button from '../Button/Button'
import Description from "@/app/components/Description/Description";


interface Props {
    title: string;
    description: string;
    category: string;
    time: string;
    icon: string;
}

const WorksItem = (props: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.headerWrapper}>
                <div className={styles.leftHeaderWrapper}>
                    <Button type={"cube"} icon={props.icon}/>
                    <p className={styles.title}>{props.title}</p>
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
                    <p className={styles.infoTitle}>{props.category}</p>
                </div>
                <div className={styles.worksInfoWrapperSecond}>
                    <p className={styles.infoCategory}>Time Taken</p>
                    <div className={styles.dot}></div>
                    <p className={styles.infoTitle}>{props.time}</p>
                </div>
            </div>
            <Description color={"lightGray"} title={props.description}/>
        </div>
    )
}

export default WorksItem;