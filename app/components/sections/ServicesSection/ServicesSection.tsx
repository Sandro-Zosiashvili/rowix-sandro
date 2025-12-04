import styles from './ServicesSection.module.scss'
import ServicesItem from '../../ServiceItem/ServiceItem'
import Title from "@/app/components/Title/Title";

const ServicesSection = () => {
    const data = [
        {
            title: 'Web Design',
            description: 'Our Web Design service is all about creating visually stunning ' +
                'and user-friendly websites that leave a lasting.',
            price: '1,500',
            icon: 'Ruler-Pen.svg'
        }, {
            title: 'Mobile App Development',
            description: 'With our Mobile App Development service, we harness the power of mobile technology' +
                ' to create cutting-edge applications that engage your customers on-the-go.',
            price: '2,500',
            icon: 'Smartphone.svg'
        }, {
            title: 'Web Development',
            description: 'Our Web Development service is focused on turning your website into a powerful digital asset.' +
                ' We utilize the latest technologies and industry best practices to build websites.',
            price: '1,800',
            icon: 'Code-Circle.svg'
        }, {
            title: 'Digital Marketing',
            description: 'In the digital age, marketing is a critical aspect of your business' +
                'success. Our Digital Marketing service employs data-driven strategies to enhance your brands visibility',
            price: '1,200',
            icon: 'Widget.svg'
        },
    ]

    return (
        <section className={styles.container}>

            <div className={styles.title}>
                <Title title={"Our Services"}/>
            </div>
            <div className={styles.serviceItemWrapper}>
                {
                    data.map((item, index) => (
                        <ServicesItem key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            price={item.price}/>
                    ))
                }
            </div>
        </section>
    )
}

export default ServicesSection