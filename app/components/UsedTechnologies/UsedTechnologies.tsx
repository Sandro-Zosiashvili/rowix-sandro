import styles from './UsedTechnologies.module.scss'


type Props = {
    technologies?: string[];
}

const UsedTechnologies = (props: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>Technologies Used</div>
            <div className={styles.itemWrapper}>
                {
                    props.technologies?.map((item, index) => (
                        <div className={styles.item} key={index}>
                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UsedTechnologies