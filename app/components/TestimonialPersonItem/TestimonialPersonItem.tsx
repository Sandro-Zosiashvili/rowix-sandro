import styles from './TestimonialPersonItem.module.scss'
import Button from "@/app/components/Button/Button";
import MembersLogo from "@/app/components/MembersLogo/MembersLogo";



interface  Props {
    image: string;
    name: string;
    position: number;
}

const TestimonialPersonItem = (props: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.layoutWrapper}>
                <MembersLogo image={props.image} position={true}/>
                <div className={styles.personInfoWrapper}>
                    <p className={styles.name}>{props.name}</p>
                    <p className={styles.position}>{props.position}</p>
                </div>
            </div>
            <Button type={"more"} icon={"Icon99.svg"}/>
        </div>
    )
}


export default TestimonialPersonItem;