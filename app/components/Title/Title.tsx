import styles from './Title.module.scss'

interface Props {
    title: string;
}
const Title = ({title}: Props) => {


    return (
        <div className={styles.container}>
            {title}
        </div>
    )
}

export default Title;