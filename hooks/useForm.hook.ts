import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface FormProps {
  title: string;
  link: string;
  name: "" | "news" | "tickets" | "premieres" | "fresh juice";
  description?: string;
  file?: unknown;
  selectedImage?: File | null;
  imageName?: string;
  imageExtension?: string;
}

const errorChecks = {
  title: { min: 2, max: 50 },
  link: { min: 6, max: 100 },
  description: { min: 6, max: 200 },
  imageName: { min: 2, max: 50 },
};

const allowedExtension = ["image/jpeg", "image/jpg", "image/png", "image/bmp"];

const getBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export const useForm = () => {
  const [src, setSrc] = useState("");
  const [formValues, setFormValues] = useState<FormProps>({
    title: "",
    link: "",
    name: "",
    description: "",
    selectedImage: null,
    imageName: "",
    imageExtension: "",
  });
  const [errorValues, setErrorValues] = useState({
    title: "",
    link: "",
    name: "",
    description: "",
    selectedImage: "",
  });
  const [showImage, setShowImage] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    if (!showDescription) {
      setErrorValues((prevState) => ({ ...prevState, description: "" }));
    }
    if (!showImage) {
      setErrorValues((prevState) => ({ ...prevState, selectedImage: "" }));
    }
  }, [showDescription, showImage]);

  const handleUpload = (reference: string, event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    let error = "";
    if (!allowedExtension.includes(file.type)) error = "Upload a valid image";
    setErrorValues((prevState) => ({ ...prevState, [reference]: error }));

    const blob = new Blob([file], { type: file.type });
    setSrc(URL.createObjectURL(blob));
    setFormValues((prevState) => ({
      ...prevState,
      [reference]: file,
      imageName: file.name.split(".")[0],
      imageExtension: file.name.split(".")[1],
    }));
  };

  const handleChange = (reference: string, value: string) => {
    let error = "";
    if (errorChecks[reference]) {
      const { min, max } = errorChecks[reference];
      if (min && value.length < min) {
        error = `Must be at least ${min} characters`;
      }
      if (max && value.length > max) {
        error = `Must be less than ${max} characters`;
      }
      setErrorValues((prevState) => ({ ...prevState, [reference]: error }));
    }
    setFormValues((prevState) => ({ ...prevState, [reference]: value }));
  };

  const submitNewLink = async (event: FormEvent) => {
    event.preventDefault();

    let file: File;
    let submission: FormProps;
    if (showImage) {
      file = new File(
        [formValues.selectedImage],
        `${formValues.imageName}.${formValues.imageExtension}`,
        {
          type: formValues.selectedImage.type,
        }
      );
      submission = { ...formValues, file: await getBase64(file) };
    } else {
      submission = { ...formValues };
    }

    if (!showDescription) delete submission.description;
    delete submission.selectedImage;
    delete submission.imageName;
    delete submission.imageExtension;

    // const res = await fetch("/api/github", {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(submission),
    // });
    // const data = await res.json();
    console.log(submission);
  };

  const removeImage = () => {
    setFormValues((prevState) => ({ ...prevState, selectedImage: null }));
  };

  return {
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
  };
};
