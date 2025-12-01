import styles from './BannerTitle.module.scss'

interface Props {
    title: string;
    size: number;
}

const BannerTitle = ({ title, size }: Props) => {
    return (
        <p className={styles.container} style={{ fontSize: `${size}vw` }}>
            {title}
        </p>
    )
}

export default BannerTitle