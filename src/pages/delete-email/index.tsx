import { ChangeEvent, FormEvent, useState } from "react";
import { Spinner } from "components/Loading";
import styles from "components/Signup/Signup.module.scss";
import { CheckIcon } from "components/Icon";

export default function DeleteEmail() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!/^.+@.+\..+/.test(email) || !email) {
      setError("Enter your email");
      return;
    }

    setLoading(true);

    await fetch("/api/newsletter/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
      }),
    });

    setLoading(false);
    setComplete(true);
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

  const handleButtonView = () => {
    if (loading) return <Spinner button />;
    return (
      <button className="btn btn-outline-dark" type="submit" disabled={error ? true : false}>
        Update
      </button>
    );
  };

  return (
    <div className="deleteBG">
      <form onSubmit={handleSubmit}>
        <h2>Remove your Email from the Plant Bass'd Newsletter</h2>
        {complete ? (
          <div className={styles.tickSVG}>
            <CheckIcon />
          </div>
        ) : (
          <>
            <input
              type="email"
              onChange={handleEmailChange}
              className="form-control mb-1"
              placeholder="Your email"
              disabled={complete ? true : false}
              value={email}
            />
            {error && <p className="errorText">{error}</p>}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "1rem",
              }}
            >
              {handleButtonView()}
            </div>
          </>
        )}
      </form>
    </div>
  );
}
