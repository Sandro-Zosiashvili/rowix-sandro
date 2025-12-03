"use client"
import styles from './QuestionItem.module.scss'
import Description from '../Description/Description'
import Button from '../Button/Button'

interface Props {
    description: string;
    title: string;
    isActive: boolean;
    onToggle: () => void;
}

const QuestionItem = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.headerWrapper}>
                <h3 className={styles.title}>{props.title}</h3>
                <Button
                    onCLick={props.onToggle}
                    type={"more"}
                    icon={props.isActive ? "Icon-minus.svg" : "Icon-plus.svg"}
                />
            </div>
            {
                props.isActive &&
                <div className={styles.answer}>
                    <div className={styles.line}></div>
                    <Description color={"lightGray"} title={props.description}/>
                </div>
            }
        </div>
    )
}

export default QuestionItem;