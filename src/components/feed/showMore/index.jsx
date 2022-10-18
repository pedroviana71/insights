import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import styles from "./index.module.css";

const ShowMore = ({ handleShowMore }) => {
  return (
    <div onClick={handleShowMore} className={styles.container}>
      <MdMoreHoriz className={styles.showMoreDots} />
      <div className={styles.showMoreText}>Toque para exibir mais Insights</div>
    </div>
  );
};

export default ShowMore;
