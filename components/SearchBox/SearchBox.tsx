import { ChangeEvent, ReactElement } from "react";
import styles from "./SearchBox.module.scss";

interface SearchBoxProps {
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  filter: string;
  placeholder?: string;
  amount?: number;
  text?: string;
  showLabel?: boolean;
  children?: ReactElement;
}

export const SearchBox = ({
  handleSearchChange,
  filter,
  amount,
  text = "Post",
  showLabel = true,
  children,
}: SearchBoxProps) => {
  return (
    <div className={styles.searchPositioning}>
      <div className={styles.labelAndAmount}>
        {showLabel && <label htmlFor="search">Search for posts using keywords or names</label>}
        {amount && (
          <p className="m-0">
            {amount} {amount == 1 ? text : `${text}s`}
          </p>
        )}
        {children && children}
      </div>
      <input
        aria-label="Filter"
        id="search"
        className="form-control"
        onChange={handleSearchChange}
        placeholder="Type to search..."
        type="text"
        value={filter}
      />
    </div>
  );
};
