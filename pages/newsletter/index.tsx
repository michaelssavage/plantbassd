import { TiTick } from "react-icons/ti";
import styles from "components/Signup/Signup.module.scss";
import { Loading } from "components/Loading";
import { HoverLink } from "components/HoverLink";
import Header from "components/Header";
import { useNewsletter } from "hooks/useNewsletter.hook";

export default function Newsletter() {
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
            <TiTick />
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
    <div className="signupBG">
      <form onSubmit={handleSubmit}>
        <Header first="Newsletter" />
        <p>Sign up to our newsletter to keep up to date!</p>
        {complete ? (
          <div className={styles.deleteSVG}>
            <TiTick />
          </div>
        ) : (
          <>
            <label htmlFor="nameInput">First Name</label>
            <input
              type="text"
              onChange={handleNameChange}
              className="form-control mb-1"
              placeholder="Enter your first name"
              disabled={complete ? true : false}
              value={name}
              id="nameInput"
            />

            <label htmlFor="emailInput">Email Address</label>
            <input
              type="email"
              onChange={handleEmailChange}
              className="form-control mb-1"
              placeholder="Enter your email"
              disabled={complete ? true : false}
              value={email}
              id="emailInput"
            />
            <div className={styles.checkBox} style={{ margin: "1rem 0" }}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={checkBox}
                onChange={() => setCheckBox(!checkBox)}
                id="flexCheckbox"
              />
              <label htmlFor="flexCheckbox">
                I agree to the <HoverLink url="terms-and-conditions" name="T&Cs" inline /> and{" "}
                <HoverLink url="privacy-policy" name="Privacy Policy" inline />
              </label>
            </div>
            {error && <p className="errorText">{error}</p>}
            <div className={styles.formButtons}>{handleButtonView()}</div>
          </>
        )}
      </form>
    </div>
  );
}
