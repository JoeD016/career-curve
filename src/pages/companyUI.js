import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import EmployeeList from './components/employee_list';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        {/* <Head>
          <title>Company UI</title>
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
        <main className={styles.main}>
          <EmployeeList />
        </main>
      </div>
    </>
  );
}