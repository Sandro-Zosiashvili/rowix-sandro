import styles from './ReasonsItem.module.scss'
import Description from "@/app/components/Description/Description";
import Button from '../Button/Button'

interface Props {
    title: string;
    description: string;
}
const ReasonsItem = ({title, description}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.infoWrapper}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.descriptionWrapper}>
                    <Description color={"lightGray"} title={description}/>
                </div>
            </div>
            <div className={styles.ButtonWrapper}>
                <Button type={'icon'} icon={"arrow.svg"} />
                <p className={styles.ButtonTitle}>Learn More</p>
            </div>
        </div>
    )
}

export default ReasonsItem;