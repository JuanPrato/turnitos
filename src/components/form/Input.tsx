"use client"

import { ChangeEvent, useRef, useState } from "react";
import { Badge } from "../Badge";
import { regexPhoneNumber } from "@/utils/constants";
import { twMerge } from "tailwind-merge";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
}

type TextAreaProps = Props & {
  label: string;
  name: string;
}

type SelectProps = Props & {
  disabled?: boolean
}

const styles = "block mb-2 font-bold";
const inputStyles = "text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500";

export function TextInput({ label, name, placeholder }: Props) {
  return (
    <label className={styles}>
      {label}
      <input type="text" name={name} placeholder={placeholder} className={inputStyles} />
    </label>
  );
}

export function PasswordInput({ label, name, placeholder }: Props) {

  const [show, setShow] = useState<boolean>(false)

  return (
    <label className={styles}>
      {label}
      <div className="join flex">
        <input type={show ? "text" : "password"} name={name} placeholder={placeholder} className={twMerge(inputStyles, "join-item")} />
        <button type="button" className="btn join-item" onClick={() => setShow(s => !s)}>👁️</button>
      </div>
    </label>
  )
}

export function EmailInput({ label, name }: Props) {
  return (
    <label className={styles}>
      {label}
      <input type="email" name={name} className={inputStyles} />
    </label>
  );
}

export function PhoneInput({ label, name, placeholder }: Props) {

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
      <input type="text" name={name} value={value} placeholder={placeholder} className={inputStyles} onChange={onChange} pattern={regexPhoneNumber.source} />
    </label>
  )
}

export function TextAreaInput({ label, name }: TextAreaProps) {
  return (
    <label className={[styles, "flex flex-col flex-grow"].join(" ")}>
      {label}
      <textarea className={twMerge(inputStyles, "flex-grow resize-none")} name={name} />
    </label>
  );
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
        <option>Alisado doble</option>
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
  return (
    <label className={styles}>
      {label}
      <ul className="pb-1 flex gap-3">
        {
          values.map((v, i) => (<Badge key={i} onClick={() => setValues(vs => vs.filter(it => it !== v))}>{v} x</Badge>))
        }
      </ul>
      <select
        className={inputStyles}
        disabled={disabled}
        name={name}
        value={"SELECCIONA LOS SERVICIOS"}
        onChange={(e) =>
          setValues(v => {
            if (values.includes(e.target.value)) {
              return values.filter(vl => vl !== e.target.value);
            }
            return [...v, e.target.value];
          })
        }
      >
        <option disabled defaultChecked>SELECCIONA LOS SERVICIOS</option>
        <option>Alisado</option>
        <option>Alisado doble</option>
        <option>Corte</option>
        <option>Color</option>
        <option>Otra cosa</option>
        <option>Una cosa más</option>
      </select>
    </label >
  );

}

export function CalendarInput({ label, name }: Props) {
  return (
    <label className={styles}>
      {label}
      <input className={twMerge(inputStyles, "py-1")} type="date" name={name} />
    </label>
  );
}