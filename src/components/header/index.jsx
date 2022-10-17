import styles from "./index.module.css";
// import { ReactComponent as Background } from "../../assets/background.svg";
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
    </div>
  );
};

export default Header;
