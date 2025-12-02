import styles from './ReasonsSection.module.scss'
import ReasonsItem from "@/app/components/ReasonsItem/ReasonsItem";
import Title from '../../Title/Title'

type ReasonsData = {
    title: string;
    description: string;
    id: number;
}
const ReasonsSection = () => {
    const title = 'Reasons to Choose NexGen for Your Digital Journey'
    const ReasonsData = [
        {
            title: "Expertise in Cutting-Edge Technologies",
            description: "NexGen ensures your projects are powered by state-of-the-art technologies, " +
                "guaranteeing innovation and future-proof solutions.",
            id: 1
        },
        {
            title: "Proven Track Record of Success",
            description: "NexGen demonstrates a consistent ability to meet and exceed client expectations," +
                " providing reliable and effective web solutions tailored to diverse needs.",
            id: 2
        },
        {
            title: "Client-Centric Approach",
            description: "At NexGen, we prioritize understanding our clients' unique requirements," +
                "fostering transparent communication throughout the development process.",
            id: 3
        },
        {
            title: "Dedicated Team of Professionals",
            description: "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, " +
                "scalable, and secure web solutions for your business.",
            id: 4
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Title title={title}/>
            </div>
            <div className={styles.reasonItemWrappeer}>
                {
                    ReasonsData.map((item, index) => (
                        <ReasonsItem title={item.title} description={item.description} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ReasonsSection;