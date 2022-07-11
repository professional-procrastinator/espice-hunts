import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

import { useState } from "react";

export default function Loader({
  size,
  color,
  className,
  loading,
}: LoaderInterface) {
  return (
    <div
      className={cx([styles.loader], className)}
      style={{
        width: size === "small" ? "18px" : "32px",
        height: size === "small" ? "18px" : "32px",
        borderLeftColor: color,
        borderWidth: size === "small" ? "1.6px" : "2.5px",
      }}
    ></div>
  );
}

interface LoaderInterface {
  size: string;
  color?: string;
  className?: string;
  loading: boolean;
}
