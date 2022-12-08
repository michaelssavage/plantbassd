import PropTypes from "prop-types";
import Error from "components/Error";

export default function Error404({ error }) {
  return <Error error={error} />;
}

Error404.propTypes = {
  error: PropTypes.string,
};
