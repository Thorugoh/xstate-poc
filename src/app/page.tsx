'use client'
import styles from "./page.module.css";

import { useMachine } from "@xstate/react";
import { toggleMachine } from "./state-machines/toggleMachine";


export default function Home() {
  const [snapshot, send] = useMachine(toggleMachine);
  
  return (
    <main className={styles.main}>
      <a>{snapshot.value.toString()}</a>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => send({type: 'toggle'})}>
          Toggle
        </button>
      </div>
    </main>
  );
}
