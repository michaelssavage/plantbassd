import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "styles/page.module.scss";

interface TagListProps {
  name: string;
  value: bool;
}

interface FilterTagsProps {
  handleTags: (tag: string) => void;
  tagList: TagListProps[];
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
