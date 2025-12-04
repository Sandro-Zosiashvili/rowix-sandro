import styles from "./Header.module.scss"
import HeadTitle from "@/app/components/HeadTitle/HeadTitle";
import Menu from "@/app/components/Menu/Menu";
import Button from "@/app/components/Button/Button";

const Header = () => {
    return (
        <header className={styles.container}>
            <HeadTitle />
            <div className={styles.rightHeader}>
                <Menu />
                <Button type={"normal"} title={"CONTACT US"} />
            </div>
        </header>
    )
}

export default Header;
