import { useState } from "react";
import mockInsights from "../../data/mockInsights";
import styles from "./index.module.css";
import ShowMore from "./showMore";
import { MdSearch } from "react-icons/md";

const Feed = () => {
  const [showPerTime, setShowPerTime] = useState(3);
  const [data, setData] = useState(mockInsights);
  const [textInput, setTextInput] = useState("");
  const [searchParam] = useState(["description", "tag"]);

  const handleShowMore = () => {
    setShowPerTime(showPerTime + 3);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTextInput(value);
  };

  const handleDelete = (e) => {
    if (e.key === "Backspace") {
      setData(mockInsights);
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
      {data.slice(0, showPerTime).map((insight) => {
        return (
          <div className={styles.cardItem} key={insight.id}>
            <p className={styles.description}>{insight.description}</p>
            {insight.tag ? <p className={styles.tag}>{insight.tag}</p> : null}
          </div>
        );
      })}
      {showPerTime < mockInsights.length ? (
        <ShowMore handleShowMore={handleShowMore} />
      ) : null}
      <div className={styles.search}>
        <input type="text" onChange={handleChange} onKeyDown={handleDelete} />
        <button className={styles.searchButton} onClick={handleSearch}>
          <MdSearch className={styles.iconSearch} />
        </button>
      </div>
    </div>
  );
};

export default Feed;
