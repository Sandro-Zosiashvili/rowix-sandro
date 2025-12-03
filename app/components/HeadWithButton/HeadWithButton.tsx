import Title from "@/app/components/Title/Title";
import Button from "@/app/components/Button/Button";
import styles from "./HeadWithButton.module.scss";

interface Props {
    title: string;
    infoTitle: string;
}
const  HeadWithButton = (props: Props) => {

    return (
        <div>
            <div className={styles.headWithButton}>
                <Title title={props.title}/>
                <div className={styles.details}>
                    <Button type={'link'} icon={"arrow.svg"}/>
                    <p className={styles.infoTitle}>{props.infoTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default HeadWithButton;