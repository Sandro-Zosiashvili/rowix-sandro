import styles from './TestimonialItem.module.scss'
import Description from "@/app/components/Description/Description";
import TeamMembers from "@/app/components/TeamMembers/TeamMembers";
import TestimonialPersonItem from "@/app/components/TestimonialPersonItem/TestimonialPersonItem";

interface Props {
    title: string;
    description: string;
    image: string;
    name: string;
    position: string;
}

const TestimonialItem = (props: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>{props.title}</p>
                <Description color={"lightGray"} title={props.description}/>
            </div>
            <TestimonialPersonItem image={props.image} name={props.name} position={props.position}/>
        </div>
    )
}

export default TestimonialItem;