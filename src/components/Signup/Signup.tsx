import { Loading } from "components/Loading";
import { HoverLink } from "components/HoverLink";
import { useNewsletter } from "hooks/useNewsletter.hook";
import { CheckIcon } from "components/Icon";
import styles from "./Signup.module.scss";

export const Signup = ({ linktree }: { linktree?: boolean }) => {
  const {
    name,
    email,
    loading,
    complete,
    error,
    checkBox,
    setCheckBox,
    handleSubmit,
    handleEmailChange,
    handleNameChange,
  } = useNewsletter();

  const handleButtonView = () => {
    if (loading) return <Loading button />;
    if (complete) {
      return (
        <button className="btn btn-outline-success shake" disabled>
          <div className={styles.svg}>
            <CheckIcon />
          </div>
        </button>
      );
    }
    return (
      <button className="btn btn-outline-dark" type="submit" disabled={error ? true : false}>
        I'm in!
      </button>
    );
  };

  return (
    <form onSubmit={handleSubmit} className={linktree ? styles.formLinktree : styles.form}>
      {!linktree && <h3>Want to know when we post?</h3>}
      <p className={styles.signUpText}>Sign up to our newsletter to keep up to date!</p>

      <input
        type="text"
        onChange={handleNameChange}
        className="form-control mb-1"
        placeholder="Your first name"
        disabled={complete ? true : false}
        value={name}
      />
      <input
        type="email"
        onChange={handleEmailChange}
        className="form-control mb-1"
        placeholder="Your email"
        disabled={complete ? true : false}
        value={email}
      />
      <div className={styles.checkBox}>
        <input
          className="form-check-input"
          type="checkbox"
          checked={checkBox}
          onChange={() => setCheckBox(!checkBox)}
          id="flexCheckbox"
        />
        <label className={styles.agreeTermsText} htmlFor="flexCheckbox">
          I agree to the <HoverLink url="/terms-and-conditions" name="T&Cs" /> and{" "}
          <HoverLink url="/privacy-policy" name="Privacy Policy" />
        </label>
      </div>
      {error && <p className="errorText">{error}</p>}
      <div className={styles.formButtons}>{handleButtonView()}</div>
    </form>
  );
};
