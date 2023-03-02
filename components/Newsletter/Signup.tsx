import { ChangeEvent, FormEvent, useState } from "react";
import { TiTick } from "react-icons/ti";
import { format as formatDate } from "date-fns";
import styles from "./Newsletter.module.scss";

interface SignupProps {
  setEmail: (val: string) => void;
  setName: (val: string) => void;
  setShowNewsletter: (val: boolean) => void;
  name: string;
  email: string;
}

export const Signup = (props: SignupProps) => {
  const { setEmail, setName, setShowNewsletter, name, email } = props;

  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setComplete(true);
    // console.log({
    //   name: name,
    //   email: email,
    //   date: formatDate(new Date(), "dd/MM/yyyy HH:mm:ss"),
    // });
    setTimeout(() => {
      setShowNewsletter(false);
    }, 3000);
    // send data to a google spreadsheet or doc
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!/^.+@.+\..+/.test(value) || !value) {
      setError("Enter a valid email");
    } else {
      setError("");
    }
    setEmail(value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length <= 1 || value.length > 50) {
      setError("Enter a valid name");
    } else {
      setError("");
    }
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
      {error && <p className={styles.errorText}>{error}</p>}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        {complete ? (
          <button className="btn btn-outline-success shake" disabled>
            <div className={styles.svg}>
              <TiTick />
            </div>
          </button>
        ) : (
          <button className="btn btn-outline-dark" type="submit" disabled={error ? true : false}>
            I'm in!
          </button>
        )}
        <button
          className="btn btn-outline-dark"
          type="button"
          onClick={() => setShowNewsletter(false)}
        >
          Close
        </button>
      </div>
    </form>
  );
};
