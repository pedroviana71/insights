import styles from "./index.module.css";
import data from "../../data/mockProfile.js";
import HeaderMini from "./headerMini";
const Header = () => {
  const { firstName, email, profilePicture } = data;

  return (
    <div className={styles.headerLarger}>
      <HeaderMini profilePicture={profilePicture} />
      <div className={styles.profileInfoContainer}>
        <div className={styles.profileName}>{`Olá, ${firstName}!`} </div>
        <div className={styles.profileEmail}>{email}</div>
      </div>
      <div className={styles.separator} />
      <div className={styles.title}>Feed de Insights</div>
    </div>
  );
};

export default Header;
