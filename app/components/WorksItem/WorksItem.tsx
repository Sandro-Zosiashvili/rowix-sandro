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
        <article className={styles.container}>
            <div className={styles.headerWrapper}>
                <div className={styles.leftHeaderWrapper}>
                    <Button type={"cube"} icon={props.icon}/>
                    <h3 className={styles.title}>{props.title}</h3>
                </div>
                <div className={styles.moreInfoWrapper}>
                    <Button type={"link"} icon={"arrow.svg"}/>
                    <span className={styles.moreDetails}>Details</span>
                </div>
            </div>
            <div className={styles.worksInfo}>
                <dl className={styles.worksInfoWrapper}>
                    <dt className={styles.infoCategory}>Category</dt>
                    <dd className={styles.infoTitle}>{props.category}</dd>
                </dl>
                <dl className={styles.worksInfoWrapperSecond}>
                    <dt className={styles.infoCategory}>Time Taken</dt>
                    <dd className={styles.infoTitle}>{props.time}</dd>
                </dl>
            </div>
            <Description color={"lightGray"} title={props.description}/>
        </article>
    )
}

export default WorksItem;
