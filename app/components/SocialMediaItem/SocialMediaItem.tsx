import styles from './SocialMediaItem.module.scss';
import Button from "@/app/components/Button/Button";
import Description from "@/app/components/Description/Description";


interface Props {
    icon: string;
    title: string;
    description: string;
}

const SocialMediaItem = (props: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.socialMedias}>
                <Button type={"cube"} icon={props.icon}/>
                <Button type={"link"} icon={"arrow.svg"}/>
            </div>
            <div className={styles.description}>
                <div className={styles.title}>{props.title}</div>
                <Description color={"lightGray"} title={props.description}/>
            </div>
        </div>
    )
}

export default SocialMediaItem;