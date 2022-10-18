import { useState } from "react";
import styles from "./index.module.css";
import ShowMore from "./showMore";
import Search from "./search";

const Feed = ({ mockInsights }) => {
  const [showPerTime, setShowPerTime] = useState(3);
  const [data, setData] = useState(mockInsights);
  const [textInput, setTextInput] = useState("");
  const [searchParam] = useState(["description", "tag"]);
  const [showModal, setShowModal] = useState(false);

  const handleShowMore = () => {
    setShowPerTime(showPerTime + 3);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTextInput(value);
  };

  const handleDelete = (e) => {
    if (e.key === "Backspace" && textInput.length === 1) {
      setData(mockInsights);
      setShowPerTime(3);
    }
  };

  const handleSearch = () => {
    const newData = data.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(textInput.toLowerCase()) > -1
        );
      });
    });
    setData(newData);
  };

  return (
    <div className={styles.feedContainer}>
      {showModal && <div className={styles.modal}></div>}
      {data?.slice(0, showPerTime).map((insight) => {
        return (
          <div className={styles.cardItem} key={insight.id}>
            <p className={styles.description}>{insight.description}</p>
            {insight.tag ? <p className={styles.tag}>{insight.tag}</p> : null}
          </div>
        );
      })}
      {showPerTime < mockInsights?.length ? (
        <ShowMore handleShowMore={handleShowMore} />
      ) : null}
      <Search
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default Feed;
