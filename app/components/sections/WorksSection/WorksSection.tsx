
import styles from './WorksSection.module.scss'
import WorksItem from "@/app/components/WorksItem/WorksItem";


const WorksSection = () => {

    return (

        <div className={styles.container}>
            <WorksItem />
        </div>
    )
}

export default WorksSection