import styles from './WorksSection.module.scss'
import WorksItem from "@/app/components/WorksItem/WorksItem";
import UsedTechnologies from "@/app/components/UsedTechnologies/UsedTechnologies";
import Button from '../../Button/Button'
import TeamMembers from '../../TeamMembers/TeamMembers'
import Title from "@/app/components/Title/Title";
import HeadWithButton from "@/app/components/HeadWithButton/HeadWithButton";


type Data = {
    title: string;
    description: string;
    category: string;
    time: string;
    icon: string;
    id: number;
}

const WorksSection = () => {
    const data: Data = {
        title: "Zenith Fitness App",
        description: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
        category: "Mobile App Development",
        time: "6 months",
        icon: "Magic-Stick.svg",
        id: 1
    }
    const data2: Data = {
        title: "A-Aura Ecommerce",
        description: "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
        category: "Web Design & Development",
        time: "3 months",
        icon: "Balloon.svg",
        id: 1
    }

    return (
        <div className={styles.container}>
            <HeadWithButton title={"Our Works"} infoTitle={"ALL WORKS"} />
            <div className={styles.worksInfo}>
                <WorksItem title={data.title} description={data.description} category={data.category}
                           time={data.time} icon={data.icon}/>
                <img className={styles.image} src={'../../images/Image2.svg'} alt={"Our Works"}/>
                <div className={styles.aboutProject}>
                    <UsedTechnologies technologies={["React Native", "Firebase", "Redux", "REST API", "MongoDB"]}/>
                    <TeamMembers images={["person1.png", "person2.png", "person3.png", "person4.png", "person5.png"]}/>
                    <Button type={'normal'} title={"Book A Call"}/>
                </div>
            </div>
            <div className={styles.worksInfo}>
                <WorksItem title={data2.title} description={data2.description} category={data2.category}
                           time={data2.time} icon={data2.icon}/>
                <img className={styles.image} src={'../../images/Image3.svg'} alt={"Our Works"}/>
                <div className={styles.aboutProject}>
                    <UsedTechnologies technologies={["WordPress", "PHP", "Redux", "HTML5", "CSS3", "JavaScript"]}/>
                    <TeamMembers images={["person6.png", "person7.png", "person8.png", "person9.png", "person2.png"]}/>
                    <Button type={'normal'} title={"Book A Call"}/>
                </div>
            </div>
        </div>
    )
}

export default WorksSection