import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "styles/page.module.scss";
import { TagProps } from "types/frontmatter";

interface FilterTagsProps {
  handleTags: (tag: TagProps) => void;
  tagList: TagProps[];
}

export default function FilterTags({ tagList, handleTags }: FilterTagsProps) {
  return (
    <div className={styles.btnGroup} role="group">
      <div>Filters:</div>

      {tagList
        ? tagList.map((tag) => (
            <button
              className={`btn btn-outline-dark ${tag.value ? "active" : ""}`}
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
  );
}
