import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { TiTick } from "react-icons/ti";
import { format as formatDate } from "date-fns";
import { Loading } from "components/Loading";
import { NewsletterContext } from "context/newsletter.context";
import styles from "./Newsletter.module.scss";

interface SignupProps {
  setEmail: (val: string) => void;
  setName: (val: string) => void;
  name: string;
  email: string;
}

export const Signup = (props: SignupProps) => {
  const { setEmail, setName, name, email } = props;

  const { setShowNewsletter } = useContext(NewsletterContext);

  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!email || !name) {
      setError("Enter all details");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        createdDate: formatDate(new Date(), "dd/MM/yyyy HH:mm:ss"),
      }),
    });
    if (res.status === 201) {
      setLoading(false);
      setComplete(true);
      setTimeout(() => {
        setShowNewsletter(false);
      }, 3000);
    } else if (res.status === 204) {
      setLoading(false);
      setError("Email already exists");
      setComplete(false);
    } else {
      setLoading(false);
      setError("Error signing up");
      setComplete(false);
    }
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
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Want to know when we post?</h3>
      <p>Sign up to our newsletter to keep up to date</p>

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
      {error && <p className="errorText">{error}</p>}
      <div className={styles.formButtons}>
        {handleButtonView()}
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
