import styles from "./index.module.css";
import data from "../../data/mockProfile.js";
import HeaderMini from "./headerMini";

const Header = ({ handleCreateInsight }) => {
  const { firstName, email, profilePicture } = data;

  return (
    <div className={styles.headerLarger}>
      <HeaderMini
        profilePicture={profilePicture}
        handleCreateInsight={handleCreateInsight}
      />
      <div className={styles.profileInfoContainer}>
        <div className={styles.profileName}>{`Olá, ${firstName}!`} </div>
        <div className={styles.profileEmail}>{email}</div>
      </div>
      <div className={styles.separator} />
      <h1 className={styles.title}>Feed de Insights</h1>
    </div>
  );
};

export default Header;
