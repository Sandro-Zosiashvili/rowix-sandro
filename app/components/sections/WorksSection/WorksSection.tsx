import styles from './WorksSection.module.scss'
import WorksItem from "@/app/components/WorksItem/WorksItem";
import UsedTechnologies from "@/app/components/UsedTechnologies/UsedTechnologies";
import Button from '../../Button/Button'
import TeamMembers from '../../TeamMembers/TeamMembers'
import Title from "@/app/components/Title/Title";
const WorksSection = () => {

    return (

        <div className={styles.container}>
            <div className={styles.title}>
                <Title title={"Our Works"}/>
                <div className={styles.details}>
                    <Button  type={'link'} icon={"arrow.svg"}/>
                    <p className={styles.infoTitle}>DETAILS</p>
                </div>
            </div>
            <div className={styles.worksInfo}>
                
            </div>
            {/*<WorksItem*/}
            {/*<UsedTechnologies />*/}
            {/*<TeamMembers />*/}
        </div>
    )
}

export default WorksSection