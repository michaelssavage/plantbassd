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

    const { status } = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        createdDate: formatDate(new Date(), "dd/MM/yyyy HH:mm:ss"),
        action: "",
      }),
    });
    if (status === 201) {
      setLoading(false);
      setComplete(true);
    } else if (status === 204) {
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

    // Check for URL
    const urlRegex = /(http(s)?:\/\/.)|(www\.)|([a-zA-Z0-9]\.[a-zA-Z]{2,})/i;
    const containsUrl = urlRegex.test(value);

    // Check for emoji
    const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    const containsEmoji = emojiRegex.test(value);

    if (value.length <= 1 || value.length > 50 || containsUrl || containsEmoji) {
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
