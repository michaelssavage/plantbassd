import { AiOutlineCloseCircle } from "react-icons/ai";
import { TagProps } from "types/frontmatter";
import styles from "./FilterTags.module.scss";

interface FilterTagsProps {
  handleTags: (tag: TagProps) => void;
  tagList: TagProps[];
}

export const FilterTags = ({ tagList, handleTags }: FilterTagsProps) => {
  return (
    <div className={styles.container} role="group">
      <div>Filters:</div>

      <div className={styles.btnGroup}>
        {tagList
          ? tagList.map((tag) => (
              <button
                className={`btn btn-outline-dark btn-sm ${tag.value ? "active" : ""}`}
                key={tag.name}
                onClick={() => handleTags(tag)}
                type="button"
              >
                {tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}{" "}
                {tag.value ? <AiOutlineCloseCircle /> : null}
              </button>
            ))
          : null}
      </div>
    </div>
  );
};
