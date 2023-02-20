import { ChangeEvent, FormEvent, useState } from "react";
import { TiTick } from "react-icons/ti";
import styles from "./Newsletter.module.scss";

interface NewsletterProps {
  setHidden: (val: boolean) => void;
}

export const Newsletter = ({ setHidden }: NewsletterProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    validateEmail();
    // console.log(event);
    // console.log(email, name);

    // send data to a google spreadsheet or doc

    // const data = new FormData(event.target as HTMLFormElement);

    // try {
    //   const response = await fetch(FORM_URL, {
    //     method: "post",
    //     body: data,
    //     headers: {
    //       accept: "application/json",
    //     },
    //   });

    //   setEmail("");
    //   const json = await response.json();

    //   if (json.status === "success") {
    //     setComplete(true);
    //     return;
    //   }
    // } catch (err) {
    //   setError(true);
    //   console.log(err);
    // }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  const validateEmail = () => {
    if (/^.+@.+\..+/.test(email)) {
      setError(false);
      // console.log(mail);
      setComplete(true);
    }
    if (!email) {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-1">
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
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <button
          className={`btn ${complete ? "btn-outline-success" : "btn-outline-secondary"}`}
          type="button"
          disabled={complete ? true : false}
        >
          {complete ? <TiTick /> : "I'm in!"}
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          disabled={complete ? true : false}
          onClick={() => setHidden(false)}
        >
          Close
        </button>
      </div>
      {error ? <p className={styles.errorText}>Enter a valid email</p> : null}
    </form>
  );
};
