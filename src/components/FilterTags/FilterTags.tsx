import { CloseIcon } from "components/Icon";
import styles from "./FilterTags.module.scss";

interface FilterTagsProps {
  handleTags: (tag: TagProps) => void;
  tagList: TagProps[];
}

interface TagProps {
  name: string;
  value: boolean;
}

export const FilterTags = ({ tagList, handleTags }: FilterTagsProps) => {
  return (
    <div className="row g-3 mt-2 mb-4" role="group">
      <div className={styles.btnGroup}>
        <p className={styles.filterTitle}>Filters</p>
        {tagList
          ? tagList.map((tag) => (
              <button
                className={`btn btn-outline-dark btn-sm ${tag.value ? "active" : ""} ${
                  styles.tagged
                }`}
                key={tag.name}
                onClick={() => handleTags(tag)}
                type="button"
              >
                {tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}{" "}
                {tag.value ? <CloseIcon /> : null}
              </button>
            ))
          : null}
        <p className={styles.filterTitle}>Filters</p>
      </div>
    </div>
  );
};
