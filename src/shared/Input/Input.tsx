import { useState } from "react";
import styles from "./Input.module.css";

export function Input({ inputText }: { inputText: string }) {
  const [state, setState] = useState<string>("");

  return (
    <input
      type="text"
      className={styles.root}
      placeholder={inputText}
      value={state}
      onChange={(event) => setState(event.target.value)}
      onFocus={(event) => {
        event.target.placeholder = "";
      }}
      onBlur={(event) => {
        event.target.placeholder = inputText;
      }}
    />
  );
}
