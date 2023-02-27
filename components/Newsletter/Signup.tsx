import { ChangeEvent, FormEvent, useState } from "react";
import { TiTick } from "react-icons/ti";
import styles from "./Newsletter.module.scss";

interface SignupProps {
  setEmail: (val: string) => void;
  setName: (val: string) => void;
  setComplete: (val: boolean) => void;
  setShowNewsletter: (val: boolean) => void;
  name: string;
  email: string;
  complete: boolean;
}

export const Signup = (props: SignupProps) => {
  const { setEmail, setName, setComplete, setShowNewsletter, name, email, complete } = props;

  const [error, setError] = useState(false);

  const validateEmail = () => {
    if (!/^.+@.+\..+/.test(email) || !email) {
      setError(true);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    validateEmail();
    setComplete(true);
    // console.log(email, name);
    // send data to a google spreadsheet or doc
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p>Want to know when we post? Sign up for the newsletter!</p>

      <input
        type="text"
        onChange={handleNameChange}
        className="form-control mb-1"
        placeholder="Your first name"
        value={name}
      />
      <input
        type="email"
        onChange={handleEmailChange}
        className="form-control mb-1"
        placeholder="Your email"
        value={email}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <button
          className={`btn ${complete ? "btn-outline-success" : "btn-outline-dark"}`}
          type="button"
          disabled={complete ? true : false}
        >
          {complete ? <TiTick /> : "I'm in!"}
        </button>
        <button
          className="btn btn-outline-dark"
          type="button"
          onClick={() => setShowNewsletter(false)}
        >
          Close
        </button>
      </div>
      {error ? <p className={styles.errorText}>Enter a valid email</p> : null}
    </form>
  );
};
