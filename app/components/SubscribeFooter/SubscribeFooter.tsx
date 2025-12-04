import styles from './SubscribeFooter.module.scss'
import Button from "@/app/components/Button/Button";


const SubscribeFooter = () => {

    return (
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <h4 className={styles.title}>Newsletter</h4>
                <h2 className={styles.secondTitle}>Subscribe To our Newsletter</h2>
            </div>
            <div className={styles.inputWrapper}>
                <input className={styles.input} type={"email"} placeholder={"Enter your email"} />
                <Button  type={"link"} icon={"arrow.svg"} />
            </div>

        </div>
    )
}

export default SubscribeFooter;