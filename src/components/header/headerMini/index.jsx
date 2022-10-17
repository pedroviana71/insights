import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { MdAdd } from "react-icons/md";
import styles from "./index.module.css";

const HeaderMini = ({ profilePicture }) => {
  return (
    <div className={styles.headerMini}>
      <Logo className={styles.logo} />
      <img
        className={styles.profilePicture}
        alt="Foto de perfil"
        src={profilePicture}
      />
      <MdAdd className={styles.addButton} />
    </div>
  );
};

export default HeaderMini;
