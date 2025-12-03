import styles from './Button.module.scss'

interface Props {
    type: 'normal' | 'icon' | 'cube' | 'link' | 'more';
    title?: string;
    icon?: string;
    onCLick?: () => void;
}

const Button = (props:  Props) => {
    return (
        <button onClick={props.onCLick} className={styles[props.type]}>
            {props.title}
            {props.icon &&
                <img src={`./icons/${props.icon}`} alt={props.title} />
            }
        </button>
    )
}

export default Button;
