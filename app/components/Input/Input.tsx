import styles from './Input.module.scss'

interface Props {
    type?: 'text' | 'email' | 'password' | 'tel' | 'number' | 'textarea';
    placeholder?: string;
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    id?: string;
    rows?: number;
}

const Input = (props: Props) => {
    const inputId = props.id || `input-${props?.name || props.label?.toLowerCase().replace(/\s+/g, '-')}`;
    const isTextarea = props.type === 'textarea';

    return (
        <div className={styles.wrapper}>
            <label htmlFor={inputId} className={styles.label}>
                {props.label}
                {props.required && <span className={styles.required}> *</span>}
            </label>
            {isTextarea ? (
                <textarea
                    id={inputId}
                    className={styles.containerArea}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    name={props.name}
                    required={props.required}
                    disabled={props.disabled}
                    rows={props.rows || 5}
                    aria-required={props.required}
                    aria-label={props.label}
                />
            ) : (
                <input
                    id={inputId}
                    className={styles.container}
                    type={props.type || 'text'}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    name={props.name}
                    required={props.required}
                    disabled={props.disabled}
                    aria-required={props.required}
                    aria-label={props.label}
                />
            )}
        </div>
    )
}

export default Input;