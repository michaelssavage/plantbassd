import { useState } from "react";
import styles from "components/Newsletter/Newsletter.module.scss";
import Header from "components/Header";
import { Picture } from "components/Picture";
import PageTitle from "components/PageTitle";
import { useForm } from "hooks/useForm.hook";
import { FormItem } from "components/Form/FormItem";

export default function Manager() {
  const [renameDisabled, setRenameDisabled] = useState(true);

  const {
    src,
    formValues,
    errorValues,
    showDescription,
    showImage,
    setShowImage,
    setShowDescription,
    handleChange,
    handleUpload,
    removeImage,
    submitNewLink,
  } = useForm();

  return (
    <div className="signupBG">
      <PageTitle title="Link Manager" />
      <form onSubmit={submitNewLink}>
        <Header first="Link" second="Manager" />

        {/* Title */}
        <FormItem label="Title" error={errorValues.title} ID="titleInput">
          <input
            type="text"
            onChange={(event) => handleChange("title", event.target.value)}
            className="form-control mb-1"
            placeholder="Enter the title of the new link"
            value={formValues.title}
            id="titleInput"
            required
          />
        </FormItem>

        {/* Name */}
        <FormItem label="Name" error={errorValues.name} ID="nameInput">
          <select
            onChange={(event) => handleChange("name", event.target.value)}
            className="form-control mb-1"
            value={formValues.name}
            id="nameInput"
            required
          >
            <option value="" disabled>
              Choose an option
            </option>
            <option value="news">News</option>
            <option value="tickets">Tickets</option>
            <option value="premieres">Premiere</option>
            <option value="fresh juice">Fresh Juice</option>
          </select>
        </FormItem>

        {/* Link */}
        <FormItem label="Link" error={errorValues.link} ID="linkInput">
          <input
            type="text"
            onChange={(event) => handleChange("link", event.target.value)}
            className="form-control mb-1"
            placeholder="Enter the link url"
            value={formValues.link}
            id="linkInput"
            required
          />
        </FormItem>

        {/* Description */}
        {showDescription && (
          <FormItem label="Description" error={errorValues.description} ID="descInput">
            <input
              type="text"
              onChange={(event) => handleChange("description", event.target.value)}
              className="form-control mb-1"
              placeholder="Enter the description of the event"
              value={formValues.description}
              id="descInput"
              required={showDescription}
            />
          </FormItem>
        )}

        {/* Upload Image */}
        {!formValues.selectedImage && showImage && (
          <FormItem label="Upload Image" error={errorValues.selectedImage} ID="imageInput">
            <input
              type="file"
              onChange={(event) => handleUpload("selectedImage", event)}
              className="form-control mb-1"
              accept=".jpeg, .jpg, .png, .bmp"
              id="imageInput"
              required={showImage}
            />
          </FormItem>
        )}

        {/* Image */}
        {formValues.selectedImage && showImage && (
          <div>
            <div>Image</div>
            <div className="d-flex gap-2 align-items-center">
              <Picture alt="Uploaded image not found" size={150} src={src} />
              <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-row gap-2 align-items-baseline">
                  <input
                    type="text"
                    onChange={(event) => handleChange("imageName", event.target.value)}
                    className="form-control mb-1"
                    placeholder={formValues.imageName}
                    value={formValues.imageName}
                    disabled={renameDisabled}
                  />
                  <p>.{formValues.imageExtension}</p>
                </div>
                <div className="d-flex flex-row gap-2">
                  <button
                    className="btn btn-outline-dark"
                    type="button"
                    onClick={() => setRenameDisabled(!renameDisabled)}
                  >
                    {renameDisabled ? "Rename" : "Save"}
                  </button>
                  <button
                    className="btn btn-outline-dark text-nowrap"
                    type="button"
                    onClick={removeImage}
                  >
                    Upload New Image
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={styles.formButtons}>
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
          <div>
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
