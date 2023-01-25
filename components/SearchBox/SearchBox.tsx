import { ChangeEvent } from "react";

interface SearchBoxProps {
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  filter: string;
  placeholder?: string;
  amount?: number;
  style?: string;
  text?: string;
}

export const SearchBox = ({
  handleSearchChange,
  filter,
  amount,
  placeholder = "artist name",
  style,
  text = "Posts",
}: SearchBoxProps) => {
  return (
    <div className={style}>
      <input
        aria-label="Filter"
        className="form-control"
        onChange={handleSearchChange}
        placeholder={`Filter by ${placeholder}...`}
        type="text"
        value={filter}
      />
      {amount ? (
        <p className="m-0">
          {amount} {text}
        </p>
      ) : null}
    </div>
  );
};
