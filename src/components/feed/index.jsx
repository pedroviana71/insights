import mockInsights from "../../data/mockInsights";
import styles from "./index.module.css";
const Feed = () => {
  return (
    <div className={styles.feedContainer}>
      <div>Feed de Insights</div>
      <div>
        {mockInsights.map((insight) => {
          return (
            <div className={styles.cardItem} key={insight.id}>
              <div className={styles.description}>{insight.description}</div>
              <div className={styles.tag}>{insight.tag}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
