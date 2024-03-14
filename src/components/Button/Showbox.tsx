import styles from "./Button.module.scss";

interface ShowboxProps {
  handleLoadMore: () => void;
  handleLoadAll: () => void;
}

export const Showbox = ({ handleLoadMore, handleLoadAll }: ShowboxProps) => {
  return (
    <div className={styles.showbox}>
      <button className="btn btn-outline-dark" onClick={handleLoadMore} role="button">
        Load More
      </button>
      <button className="btn btn-dark" onClick={handleLoadAll} role="button">
        Load All
      </button>
    </div>
  );
};
