import styles from './HeadTitle.module.scss'
import Image from 'next/image'

const HeadTitle = () => {

    return (
        <img className={styles.title} src={'./icons/Logo.svg'} alt="logo of NexGen"/>
    )
}

export default HeadTitle;