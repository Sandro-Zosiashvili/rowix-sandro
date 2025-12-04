import styles from './UsedTechnologies.module.scss'

type Props = {
    technologies?: string[];
}

const UsedTechnologies = (props: Props) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Technologies Used</h3>
            <ul className={styles.itemWrapper}>
                {props.technologies?.map((item, index) => (
                    <li className={styles.item} key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UsedTechnologies;
