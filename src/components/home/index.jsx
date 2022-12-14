import React, { useState } from "react";
import mockInsights from "../../data/mockInsights";
import Feed from "../feed";
import Header from "../header";
import styles from "./index.module.css";
import CreateInsight from "../createInsight";

const Home = () => {
  const [data, setData] = useState(mockInsights);
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [countDescription, setCountDescription] = useState(400);
  const [showCreateInsight, setShowCreateInsight] = useState(false);

  const addInsight = () => {
    if (description) {
      setData([
        {
          id: data.length + 1,
          description,
          tag,
        },
        ...data,
      ]);
      setDescription("");
      setTag("");
      setShowCreateInsight(false);
    }
  };

  const handleDescription = (e) => {
    setCountDescription(400 - e.target.value.length);
    setDescription(e.target.value);
  };

  const handleTag = (e) => {
    setTag(e.target.value);
  };

  const handleShowCreateInsight = () => {
    setShowCreateInsight(!showCreateInsight);
  };

  return (
    <div className={styles.home}>
      {showCreateInsight ? (
        <CreateInsight
          handleCreateInsight={handleShowCreateInsight}
          handleDescription={handleDescription}
          handleTag={handleTag}
          addInsight={addInsight}
          countDescription={countDescription}
          description={description}
        />
      ) : null}
      <Header handleCreateInsight={handleShowCreateInsight} />
      <Feed mockInsights={data} />
    </div>
  );
};

export default Home;
