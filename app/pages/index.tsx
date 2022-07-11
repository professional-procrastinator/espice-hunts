import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Loader from "../components/Loader";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return <Loader loading={true} size={"large"} />;
};

export default Home;
