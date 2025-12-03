import styles from './TeamMembers.module.scss'
import MembersLogo from "@/app/components/MembersLogo/MembersLogo";


const TeamMembers = () => {
    const membersData = [
        {image: "person1.png", id: 1,},
        {image: "person2.png", id: 2,},
        {image: "person3.png", id: 3,},
        {image: "person4.png", id: 4,},
        {image: "person5.png", id: 5,}
    ]

    return (
        <div className={styles.container}>
            <div className={styles.title}>Team Members</div>
            <div className={styles.membersWrapper}>
                {
                    membersData.map((item, index) => (
                        <MembersLogo image={item.image} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TeamMembers;