import styles from './InfoBanner.module.scss'
import CompanyInfo from "@/app/components/CompanyInfo/CompanyInfo";

type Data = {
    title: string
    info: string
    id: number
}

const InfoBanner = () => {
    const data = [
        {title: "CLIENTS", info: "200+", id: 1},
        {title: "PROJECTS", info: "280+", id: 2},
        {title: "HAPPY CLIENTS", info: "100%", id: 3},
        {title: "FOLLOWER", info: "420k", id: 4},
        {title: "YEARS OF EXPERIENCE", info: "10+", id: 5},
        {title: "KNOW MORE", info: "", id: 6},
    ]

    return (
        <div className={styles.container}>
            {
                data.map((item: Data, index: number) => (
                    index === 5 ?
                        <CompanyInfo key={item.id} title={item.title} moreInfo /> :
                        <CompanyInfo key={item.id} title={item.title} info={item.info} />
                ))
            }
        </div>
    )
}

export default InfoBanner;