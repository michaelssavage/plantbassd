import { ChangeEvent, FormEvent, useState } from "react";
import { format as formatDate } from "date-fns";

export const useNewsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!email || !name) {
      setError("Enter all details");
      return;
    }

    if (!checkBox) {
      setError("Agree to T&Cs and Privacy Policy");
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
        action: "",
      }),
    });
    if (res.status === 201) {
      setLoading(false);
      setComplete(true);
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

  return {
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
  };
};
