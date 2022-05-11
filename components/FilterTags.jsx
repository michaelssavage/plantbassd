import { AiOutlineCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import styles from "@/pageStyle/page.module.scss";

export default function FilterTags({ tagList, handleTags }) {
  return (
    <div className={styles.btnGroup} role="group">
      <div>Filters:</div>

      {tagList &&
        tagList.map((tag) => (
          <button
            className={`btn btn-outline-dark ${tag.value ? "active" : ""}`}
            key={tag.name}
            onClick={() => handleTags(tag)}
            type="button"
          >
            {tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}{" "}
            {tag.value ? <AiOutlineCloseCircle /> : null}
          </button>
        ))}
    </div>
  );
}

FilterTags.propTypes = {
  handleTags: PropTypes.func.isRequired,
  tagList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
