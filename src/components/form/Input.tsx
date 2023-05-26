import { ComponentProps } from "react";

interface Props {
  label: string;
  inputProps?: Exclude<ComponentProps<"input">, "type">
}

const styles = "flex flex-col font-semibold";
const inputStyles = "p-2 rounded";

export function TextInput({ label, inputProps }: Props) {
  return (
    <label className={styles}>
      {label}
      <input {...inputProps} type="text" className={inputStyles} />
    </label>
  );
}

export function EmailInput({ label, inputProps }: Props) {
  return (
    <label className={styles}>
      {label}
      <input {...inputProps} type="email" className={inputStyles} />
    </label>
  );
}

export function PhoneInput({ label, inputProps }: Props) {
  return (
    <label className={styles}>
      {label}
      <input {...inputProps} type="text" className={inputStyles} />
    </label>
  )
}

interface TextAreaProps {
  label: string;
  inputProps?: ComponentProps<"textarea">;
}

export function TextAreInput({ label, inputProps }: TextAreaProps) {
  return (
    <label className={[styles, "flex-grow"].join(" ")}>
      {label}
      <textarea {...inputProps} className={[inputStyles, "flex-grow"].join(" ")} />
    </label>
  );
}