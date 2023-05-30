"use client"

import { ChangeEvent, useState } from "react";
import { Badge } from "../Badge";
import { regexPhoneNumber } from "@/utils/constants";

interface Props {
  label: string;
  name: string;
}

const styles = "flex flex-col font-semibold";
const inputStyles = "p-2 rounded ring ring-black ring-[2px]";

export function TextInput({ label, name }: Props) {
  return (
    <label className={styles}>
      {label}
      <input type="text" name={name} className={inputStyles} />
    </label>
  );
}

export function EmailInput({ label, name }: Props) {
  return (
    <label className={styles}>
      {label}
      <input type="email" name={name} className={inputStyles} />
    </label>
  );
}

export function PhoneInput({ label, name }: Props) {

  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.checkValidity()) {
      return;
    }
    setValue(e.currentTarget.value);
  }

  return (
    <label className={styles}>
      {label}
      <input type="text" name={name} value={value} className={inputStyles} onChange={onChange} pattern={regexPhoneNumber.source} />
    </label>
  )
}

interface TextAreaProps {
  label: string;
  name: string;
}

export function TextAreaInput({ label, name }: TextAreaProps) {
  return (
    <label className={[styles, "flex-grow"].join(" ")}>
      {label}
      <textarea className={[inputStyles, "flex-grow"].join(" ")} name={name} />
    </label>
  );
}

interface SelectProps {
  label: string;
  name: string;
  disabled?: boolean
}

export function SelectInput({ label, name, disabled }: SelectProps) {

  return (
    <label className={styles}>
      {label}
      <select
        className={inputStyles}
        disabled={disabled}
        name={name}
      >
        <option>Alisado</option>
        <option>Corte</option>
        <option>Color</option>
        <option>Otra cosa</option>
        <option>Una cosa más</option>
      </select>
    </label>
  );

}

export function MultipleSelectInput({ label, name, disabled }: SelectProps) {

  const [values, setValues] = useState<string[]>([]);
  console.log(values);
  return (
    <label className={styles}>
      {label}
      <ul className="pb-1 flex gap-3"><Badge>Alisado</Badge></ul>
      <select
        className={inputStyles}
        disabled={disabled}
        name={name}
        multiple={true}
        value={values}
        onChange={(e) => setValues(v => Array.from(new Set([...v, e.currentTarget.value])))}
      >
        <option>Alisado</option>
        <option>Corte</option>
        <option>Color</option>
        <option>Otra cosa</option>
        <option>Una cosa más</option>
      </select>
    </label>
  );

}

export function CalendarInput({ label, name }: Props) {
  return (
    <label className={styles}>
      {label}
      <input className={inputStyles} type="date" />
    </label>
  );
}