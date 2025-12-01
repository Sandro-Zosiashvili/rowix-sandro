'use client'

import styles from './Menu.module.scss'
import MenuItem from "@/app/components/MenuItem/MenuItem";
import {usePathname} from 'next/navigation';

type MenuData = {
    title: string;
    path: string;
    id: number;
}

const Menu = () => {
    const pathname = usePathname();

    const data = [
        {title: 'HOME', path: "/", id: 1},
        {title: 'SERVICES', path: "./services", id: 2},
        {title: 'PROJECTS', path: "./projects", id: 3},
        {title: 'ABOUT', path: "./about", id: 4},
        {title: 'CAREERS', path: "./careers", id: 5},
        {title: 'BLOGS', path: "./blogs", id: 6}
    ]

    return (
        <div className={styles.container}>
            {
                data.map((item: MenuData, index: number) => (
                    <MenuItem
                        active={pathname === item.path}
                        key={item.id}
                        title={item.title}
                        path={item.path}
                    />
                ))
            }
        </div>
    )
}

export default Menu;