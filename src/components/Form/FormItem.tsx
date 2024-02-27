import { ReactNode } from "react";

interface FormItemProps {
  label: string;
  error: string;
  ID: string;
  children: ReactNode;
}

export const FormItem = (props: FormItemProps) => {
  const { label, error, ID, children } = props;

  return (
    <>
      <label htmlFor={ID}>{label}</label>
      {children}
      {error && <p className="errorText">{error}</p>}
    </>
  );
};
