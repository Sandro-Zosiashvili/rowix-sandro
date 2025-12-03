import styles from './UsedTechnologies.module.scss'



type Props = {
    technologies?: string[];
}

const UsedTechnologies = (props: Props) => {
    const technologies = ['React Native', "Firebase", "Redux",  "Redux",  "Redux"];

    return (

        <div className={styles.container}>
            <div className={styles.title}>Technologies Used</div>
            <div className={styles.itemWrapper}>
                {
                    technologies?.map((item, index) => (
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