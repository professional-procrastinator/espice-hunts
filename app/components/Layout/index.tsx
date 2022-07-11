import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

import Head from "next/head";

interface LayoutInterface {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
}

export default function Layout({
  children,
  title,
  description,
  image,
}: LayoutInterface) {}
