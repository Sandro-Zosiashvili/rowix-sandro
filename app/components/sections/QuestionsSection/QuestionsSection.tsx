"use client"
import styles from './QuestionsSection.module.scss'
import QuestionItem from "@/app/components/QuestionItem/QuestionItem";
import {useState} from "react";
import HeadWithButton from "@/app/components/HeadWithButton/HeadWithButton";
import Input from '../../Input/Input'
import AskQuestionInput from "@/app/components/AskQuestionInput/AskQuestionInput";

interface Data {
    title: string;
    description: string;
    id: number;
}

const QuestionsSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const toggleQuestion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const data: Data[] = [{
        title: 'How long does it take to complete a web development project?',
        description: "The timeline varies depending on the project's complexity and requirements. " +
            "Our team strives to deliver projects on time while maintaining the highest quality standards.",
        id: 1
    },
        {
            title: 'Can you handle large-scale mobile app development projects?',
            description: "The timeline varies depending on the project's complexity and requirements." +
                " Our team strives to deliver projects on time while maintaining the highest quality standards.",
            id: 2
        },
        {
            title: 'Can you integrate third-party APIs into our mobile app?',
            description: "The timeline varies depending on the project's complexity and requirements. " +
                "Our team strives to deliver projects on time while maintaining the highest quality standards.",
            id: 3
        },
        {
            title: 'How do you ensure cross-platform compatibility for mobile apps?',
            description: "The timeline varies depending on the project's complexity and requirements. " +
                "Our team strives to deliver projects on time while maintaining the highest quality standards.",
            id: 4
        },
        {
            title: 'What is your approach to user experience (UX) design?',
            description: "The timeline varies depending on the project's complexity and requirements." +
                " Our team strives to deliver projects on time while maintaining the highest quality standards.",
            id: 5
        },
    ]
    return (
        <section className={styles.container}>
            <HeadWithButton title={"Frequently Asked Questions"} infoTitle={"View All"}/>
            <div className={styles.wrapper}>
                <div className={styles.questionWrapper}>
                    {
                        data.map((item, index) => (
                            <QuestionItem onToggle={() => toggleQuestion(index)} key={index}
                                          isActive={activeIndex === index}
                                          title={item.title} description={item.description}/>
                        ))
                    }
                </div>
                <div className={styles.input}>
                    <AskQuestionInput/>
                </div>
            </div>
        </section>
    )
}

export default QuestionsSection;