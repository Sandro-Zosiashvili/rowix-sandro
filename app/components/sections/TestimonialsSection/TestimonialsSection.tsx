import styles from './TestimonialsSection.module.scss'
import TestimonialPersonItem from "@/app/components/TestimonialPersonItem/TestimonialPersonItem";
import HeadWithButton from "@/app/components/HeadWithButton/HeadWithButton";
import TestimonialItem from "@/app/components/TestimonialItem/TestimonialItem";

interface Data {
    title: string;
    description: string;
    category: string;
    image: string;
    position: string;
    id: number;
}

const TestimonialsSection = () => {
    const data: Data = [
        {
            title: "NexGen turned our business around!",
            description: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
            name: "Sarah Thompson",
            image: "person10.png",
            position: "CEO of BlueBloom",
            id: 1
        },
        {
            title: "NexGen turned our business around!",
            description: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
            name: "Sarah Thompson",
            image: "person10.png",
            position: "CEO of BlueBloom",
            id: 2
        },
        {
            title: "NexGen turned our business around!",
            description: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
            name: "Sarah Thompson",
            image: "person10.png",
            position: "CEO of BlueBloom",
            id: 3
        },
        {
            title: "NexGen turned our business around!",
            description: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
            name: "Sarah Thompson",
            image: "person10.png",
            position: "CEO of BlueBloom",
            id: 4
        },

    ]

    return (
        <div className={styles.container}>
            <HeadWithButton title={"Testimonials"} infoTitle={"ALL TESTIMONIALS"}/>
            <div className={styles.itemWrapper}>
                {
                    data.map((item, index) => (
                        <TestimonialItem
                            key={index} description={item.description} title={item.title}
                            name={item.name}
                            image={item.image}
                            position={item.position}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default TestimonialsSection