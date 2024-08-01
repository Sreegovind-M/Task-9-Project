import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar";
import Chat_body from "./Components/Chat_body";


export default function Home() {
  return <div>
    <Navbar/>
    <Chat_body/>
  </div>;
}
