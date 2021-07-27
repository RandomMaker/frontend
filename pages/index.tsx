import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button, DatePicker, Tooltip } from "antd";
import ThemeSwitcher from "../components/antd/ThemeSwitcher";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Nexand</title>
            </Head>
            <div className={styles.present}>
                <h2>Presenting you</h2>
                <h1>Nexand - Nextjs + AntDesign</h1>
                <h4>Everything you ever imagined</h4>
            </div>

            {/* <div className={styles.showcomponents}>
                <DatePicker />
                <Button type="primary">Click me</Button>
            </div> */}
            <ThemeSwitcher />
        </div>
    );
}
