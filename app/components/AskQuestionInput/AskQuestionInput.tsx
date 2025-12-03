import styles from './AskQuestionInput.module.scss'
import Input from '../Input/Input';
import Button from '../Button/Button'

const AskQuestionInput = () => {

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Ask your question</h3>
            <div className={styles.line}></div>
            <div className={styles.inputBar}>
                <div className={styles.inputLayout}>
                    <p className={styles.inputTitle}>NAME</p>
                    <Input type={"text"} placeholder={"Enter your name"}/>
                </div>
                <div className={styles.inputLayout}>
                    <p className={styles.inputTitle}>EMAIL</p>
                    <Input type={"email"} placeholder={"Enter your email"}/>
                </div>
                <div className={styles.inputLayout}>
                    <p className={styles.inputTitle}>YOUR QUESTION</p>
                    <Input type={"textarea"} placeholder={"Enter your name"}/>
                </div>
            </div>
            <Button type={"normal"} title={"Send Your Message"} />
        </div>
    )
}

export default AskQuestionInput;