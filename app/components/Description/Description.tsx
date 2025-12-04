import styles from './Description.module.scss'

interface Props {
    color: 'lightGray' | 'gray'
    title: string
}

const Description = (props: Props) => {

    return (
        <span className={styles[props.color]}>
            {props.title}
        </span>
    )
}

export default Description;