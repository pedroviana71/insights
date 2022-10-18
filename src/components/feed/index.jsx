import { useState } from "react";
import mockInsights from "../../data/mockInsights";
import styles from "./index.module.css";
import ShowMore from "./showMore";
const Feed = () => {
  const [showPerTime, setShowPerTime] = useState(3);

  const handleShowMore = () => {
    setShowPerTime(showPerTime + 3);
  };

  return (
    <div className={styles.feedContainer}>
      {mockInsights.slice(0, showPerTime).map((insight) => {
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
    </div>
  );
};

export default Feed;
