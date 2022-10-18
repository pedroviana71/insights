import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { MdAdd, MdArrowBack } from "react-icons/md";
import styles from "./index.module.css";

const HeaderMini = ({ profilePicture, handleCreateInsight, type }) => {
  if (type === "CREATE_INSIGHT") {
    return (
      <div
        className={styles.headerMiniCreateInsight}
        onClick={handleCreateInsight}
      >
        <MdArrowBack className={styles.iconReturn} />
        <div className={styles.title}>
          <p>CRIAR</p>
          <p className={styles.titleInsight}>INSIGHT</p>
        </div>
        <div />
      </div>
    );
  } else {
    return (
      <div className={styles.headerMini}>
        <Logo className={styles.logo} />
        <img
          className={styles.profilePicture}
          alt="Foto de perfil"
          src={profilePicture}
        />
        <div onClick={handleCreateInsight}>
          <MdAdd className={styles.addButton} />
        </div>
      </div>
    );
  }
};

export default HeaderMini;
