import React, { useState } from "react";
import mockInsights from "../../data/mockInsights";
import Feed from "../feed";
import Header from "../header";
import styles from "./index.module.css";
import HeaderMini from "../header/headerMini";

const Home = () => {
  const [data, setData] = useState(mockInsights);
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [showCreateInsight, setShowCreateInsight] = useState(false);

  const addInsight = () => {
    if (description) {
      setData([
        ...data,
        {
          id: data.length + 1,
          description,
          tag,
        },
      ]);
    }
  };

  const handleCreateInsight = () => {
    setShowCreateInsight(!showCreateInsight);
  };

  return (
    <div className={styles.home}>
      {showCreateInsight ? (
        <div className={styles.insightContainer}>
          <HeaderMini
            handleCreateInsight={handleCreateInsight}
            type="CREATE_INSIGHT"
          />
          <div className={styles.inputContainer}>
            <div>
              <div>insight</div>
              <input type="text" />
              <p>limite de caracteres</p>
            </div>
            <div>
              <div>categoria</div>
              <input type="text" />
            </div>
          </div>
        </div>
      ) : null}
      <Header handleCreateInsight={handleCreateInsight} />
      <Feed
        mockInsights={data}
        setDescription={setDescription}
        setTag={setTag}
      />
    </div>
  );
};

export default Home;
