import { FormEvent, useState } from "react";
import { TiTick } from "react-icons/ti";
import styles from "./Newsletter.module.scss";

export const Newsletter = () => {
  const [mail, setMail] = useState(null);
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState(false);

  const subscribe = () => {
    if (/^.+@.+\..+/.test(mail)) {
      setError(false);
      // console.log(mail);
      setComplete(true);
    }
    if (!mail) {
      setError(true);
    }
  };

  return (
    <div className="mb-3">
      <p>Want to know when we post? Sign up for the newsletter!</p>
      <div className="input-group flex-nowrap">
        <input
          type="email"
          onChange={(event: FormEvent<HTMLInputElement>) => {
            setMail(event.currentTarget.value);
          }}
          className="form-control"
          placeholder="Your email"
          aria-label="Your email"
          aria-describedby="addon-wrapping"
        />
        <button
          onClick={subscribe}
          className={`btn ${complete ? "btn-outline-success" : "btn-outline-secondary"}`}
          type="button"
          id="button-addon2"
          disabled={complete ? true : false}
        >
          {complete ? <TiTick /> : "I'm in!"}
        </button>
      </div>
      {error ? <p className={styles.errorText}>Enter a valid email</p> : null}
    </div>
  );
};
