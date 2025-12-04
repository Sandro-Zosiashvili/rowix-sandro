import styles from './FooterInfoItem.module.scss'

interface Props {
    title: string;
    items: string[];
    badges?: { [key: string]: string };
}

const FooterInfoItem = (props: Props) => {
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>{props.title}</h3>
            <ul className={styles.wrapper}>
                {props.items.map((item, index) => (
                    <li key={index} className={styles.itemWrapper}>
                        <span className={styles.item}>{item}</span>
                        {props.badges?.[item] && (
                            <span className={styles.badge}>{props.badges[item]}</span>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default FooterInfoItem;
