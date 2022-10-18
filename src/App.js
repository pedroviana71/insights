import Feed from "./components/feed";
import Header from "./components/header";
import styles from "./utils/styles/app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Feed />
    </div>
  );
}

export default App;
