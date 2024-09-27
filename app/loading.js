import React from "react";
import Image from "next/image";
import styles from "./loading.module.css";

const loading = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}>
        <Image
          width={300}
          height={300}
          src="/images/spinner.gif"
          className={styles.spinnerImg}
          alt="Loading..."
          unoptimized
        />
      </div>
    </div>
  );
};

export default loading;
