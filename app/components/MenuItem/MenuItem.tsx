import styles from './MenuItem.module.scss'
import Link from 'next/link'

interface Props {
    title: string;
    active: boolean;
    path: string;
}

const MenuItem = (props:  Props) => {
    return (
        <Link href={props.path} className={props.active ? styles.active : styles.container}>
            {props.title}
        </Link>
    )
}

export default MenuItem;