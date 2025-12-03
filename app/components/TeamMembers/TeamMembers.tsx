import styles from './TeamMembers.module.scss'
import MembersLogo from "@/app/components/MembersLogo/MembersLogo";

interface Props {
    images: string[];
}

const TeamMembers = (props: Props) => {
    const membersData = props.images.map((image, index) => ({
        image: image,
        id: index + 1
    }));

    return (
        <div className={styles.container}>
            <div className={styles.title}>Team Members</div>
            <div className={styles.membersWrapper}>
                {
                    membersData?.map((item, index) => (
                        <MembersLogo image={item.image} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TeamMembers;