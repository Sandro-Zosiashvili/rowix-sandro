import styles from './ServiceItem.module.scss'
import Button from '../Button/Button'
import Description from "@/app/components/Description/Description";


interface Props {
    title: string;
    description: string;
    icon: string;
    price: string;
}

const ServiceItem = (props: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.serviceHeader}>
                <div className={styles.titleWrapper}>
                    <Button type={'cube'} icon={props.icon}/>
                    <p className={styles.title}>{props.title}</p>
                </div>
                <div className={styles.moreInfo}>
                    <Button type={'link'} icon={'arrow.svg'}/>
                    <p className={styles.moreInfoTitle}>Book A Call</p>
                </div>
            </div>
            <div className={styles.descriptionWrapper}>
                <Description color={'lightGray'} title={props.description}/>
            </div>
            <p className={styles.price}>
                Starts From ${props.price}
            </p>
        </div>
    )
}

export default ServiceItem