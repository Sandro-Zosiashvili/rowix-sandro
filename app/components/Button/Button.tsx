import styles from './Button.module.scss'

interface Props {
    type: 'normal' | 'icon' | 'cube' | 'link';
    title?: string;
    icon?: string;
}

const Button = (props:  Props) => {
    return (
        <button className={styles[props.type]}>
            {props.title}
            {props.icon &&
                <img src={`./icons/${props.icon}`} alt={props.title} />
            }
        </button>
    )
}

export default Button;
