import React from "react";
import mockInsights from "../../data/mockInsights";
import Feed from "../feed";
import Header from "../header";
import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Feed mockInsights={mockInsights} />
    </div>
  );
};

export default Home;
