import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button, DatePicker, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next.js</title>
            </Head>
            <DatePicker />
            <Button type="primary">Click me</Button>
        </div>
    );
}
