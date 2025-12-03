import styles from './MembersLogo.module.scss'

interface Props {
    image: string
    position?: boolean
}

const MembersLogo = (props: Props) => {
    if (props.position) return (
        <div className={styles.position}>
            <img className={styles.positionImage} src={`./images/${props.image}`} alt={"member"}/>
        </div>
    )

    return (
        <div className={styles.container}>
            <img className={styles.image} src={`./images/${props.image}`} alt={"member"}/>
        </div>
    )
}

export default MembersLogo