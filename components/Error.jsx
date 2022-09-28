import GoBack from "@/btns/GoBack";
import PropTypes from "prop-types";

export default function Error({ error }) {
  return (
    <div className="errorBG">
      <div className="errorPage">
        <h1>OOPS! You've encountered an error</h1>
        <p>{`${error}`}</p>

        <div className="d-flex flex-row gap-2">
          <div className="globalBottomBtn">
            <button
              className="btn btn-outline-dark btn-lg"
              onClick={() => window.location.reload()}
              type="button"
            >
              Try Again
            </button>
          </div>
          <GoBack />
        </div>
      </div>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.string.isRequired,
};
