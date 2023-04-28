import { ChangeEvent, FormEvent, useState } from "react";
import styles from "components/Newsletter/Newsletter.module.scss";
import Header from "components/Header";
import { Picture } from "components/Picture";
import PageTitle from "components/PageTitle";

export default function Newsletter() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState<File>();

  const [showDescription, setShowDescription] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [error, setError] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length <= 1 || value.length > 50) {
      setError("Enter a valid name");
    } else {
      setError("");
    }
    setTitle(value);
  };

  const handleLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!value.includes("www.ra.co/events")) {
      setError("Enter a valid url");
    } else {
      setError("");
    }
    setLink(value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (!value) {
      setError("Choose an option");
    } else {
      setError("");
    }
    setName(value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length <= 10) {
      setError("Enter a longer description");
    } else if (value.length > 200) {
      setError("Enter a shorter description");
    } else {
      setError("");
    }
    setDescription(value);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.files[0];
    setSelectedImage(value);
  };

  const submitNewLink = (event: FormEvent) => {
    event.preventDefault();
    console.log(title, link, name, description);
  };

  return (
    <div className="signupBG">
      <PageTitle title="Link Manager" />
      <form onSubmit={submitNewLink}>
        <Header first="Links Page Manager" />
        <>
          <label htmlFor="titleInput">Title</label>
          <input
            type="text"
            onChange={handleTitleChange}
            className="form-control mb-1"
            placeholder="Enter the title of the event"
            value={title}
            id="titleInput"
          />
          <label htmlFor="linkInput">RA Link</label>
          <input
            type="text"
            onChange={handleLinkChange}
            className="form-control mb-1"
            placeholder="Enter the link to Resident Advisor"
            value={link}
            id="linkInput"
          />
          <label htmlFor="linkInput">Name</label>
          <select
            onChange={handleNameChange}
            className="form-control mb-1"
            placeholder="Enter the link to Resident Advisor"
            value={name}
            id="linkInput"
          >
            <option value="" disabled>
              Choose an option
            </option>
            <option value="news">News</option>
            <option value="tickets">Tickets</option>
            <option value="premieres">Premiere</option>
            <option value="fresh juice">Fresh Juice</option>
          </select>

          {showDescription && (
            <>
              <label htmlFor="descInput">Description</label>
              <input
                type="text"
                onChange={handleDescriptionChange}
                className="form-control mb-1"
                placeholder="Enter the description of the event"
                value={description}
                id="descInput"
              />
            </>
          )}

          {!selectedImage && showImage && (
            <>
              <label htmlFor="imageInput">Upload Image</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="form-control mb-1"
                id="imageInput"
              />
            </>
          )}

          {selectedImage && showImage && (
            <div>
              <div>Image</div>
              <div className="d-flex gap-2 align-items-center">
                <Picture alt="not found" size={150} src={URL.createObjectURL(selectedImage)} />
                <div>
                  <button
                    className="btn btn-outline-dark"
                    type="button"
                    onClick={() => setSelectedImage(null)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className={styles.formButtons}>
            <div>
              <button className="btn btn-dark" type="submit" disabled={error ? true : false}>
                Submit
              </button>
              {error && <p className="errorText">{error}</p>}
            </div>

            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={() => setShowDescription(!showDescription)}
            >
              {showDescription ? "Remove" : "Add"} Description
            </button>
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={() => setShowImage(!showImage)}
            >
              {showImage ? "Remove" : "Add"} Image
            </button>
          </div>
        </>
      </form>
    </div>
  );
}
