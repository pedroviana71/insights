import HeaderMini from "../../header/headerMini";
import styles from "./index.module.css";

const CreateInsight = ({
  handleDescription,
  handleTag,
  addInsight,
  handleCreateInsight,
  countDescription,
}) => {
  return (
    <div className={styles.insightContainer}>
      <HeaderMini
        handleCreateInsight={handleCreateInsight}
        type="CREATE_INSIGHT"
      />
      <div className={styles.inputOuterContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.titleInsight}>INSIGHT</div>
          <textarea
            type="text"
            onChange={handleDescription}
            className={styles.descriptionInput}
            placeholder="Escreva aqui o seu insight..."
            maxLength={400}
          />
          <p
            className={styles.characteresLimit}
          >{`limite de caracteres: ${countDescription}`}</p>
          <div className={styles.categoryTitle}>CATEGORIA</div>
          <textarea
            type="text"
            onChange={handleTag}
            className={styles.categoryInput}
            placeholder="Adicione uma categoria (opcional)..."
          />
        </div>
        <button onClick={addInsight}>add</button>
      </div>
    </div>
  );
};

export default CreateInsight;
