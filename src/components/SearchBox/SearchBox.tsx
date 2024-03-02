import { ChangeEvent } from "react";
import styles from "./SearchBox.module.scss";

interface SearchBoxProps {
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  filter: string;
  placeholder?: string;
  amount?: number;
  text?: string;
}

export const SearchBox = ({
  handleSearchChange,
  filter,
  amount,
  text = "Post",
}: SearchBoxProps) => {
  return (
    <div className={styles.searchPositioning}>
      <label className="form-label" htmlFor="search">
        Search posts using keywords
      </label>
      <div className={styles.inputBox}>
        <p className={styles.postAmout}>
          {amount} {amount == 1 ? text : `${text}s`}
        </p>
        <input
          aria-label="Filter"
          id="search"
          className="form-control"
          onChange={handleSearchChange}
          placeholder="Type here..."
          type="text"
          value={filter}
        />
      </div>
    </div>
  );
};
