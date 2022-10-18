import { MdSearch } from "react-icons/md";
import styles from "./index.module.css";

const Search = ({ handleChange, handleDelete, handleSearch }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleDelete}
        className={styles.input}
        placeholder="Pesquise por termos ou categorias"
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        <MdSearch className={styles.iconSearch} />
      </button>
    </div>
  );
};

export default Search;
