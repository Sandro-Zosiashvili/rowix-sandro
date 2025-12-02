import styles from './CompanyInfo.module.scss'
import Button from '../Button/Button'

interface Props {
    title: string;
    info?: string;
    moreInfo?: boolean;
}

const CompanyInfo = ({title, info, moreInfo}: Props) => {

    if (moreInfo) return (
            <div className={styles.moreInfoContainer}>
                <Button type={"icon"} icon={'./icons/arrow.svg'}/>
                <p className={styles.moreInfoTitle}>{title}</p>
            </div>
        )

    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <p className={styles.info}>{info}</p>
        </div>
    )
}

export default CompanyInfo;