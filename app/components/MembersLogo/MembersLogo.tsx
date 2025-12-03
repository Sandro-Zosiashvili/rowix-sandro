import styles from './MembersLogo.module.scss'

interface Props {
    image: string
}
const MembersLogo = (props: Props) => {

    return (

        <div className={styles.container}>
            <img className={styles.image} src={`./images/${props.image}`} alt={"member"}/>
        </div>
    )
}

export default MembersLogo