"use client";

import { UserNotLogined } from "@/widgets";
import styles from "./page.module.css";
import { RootState, useAppSelector } from "./store";

export default function Home() {
  const user = useAppSelector((state: RootState) => state.initialState.user);

  const isUserLogined = user;

  return (
    <div className={styles.page}>
      {!isUserLogined ? (
        <div className={styles.main}>
          <UserNotLogined />
        </div>
      ) : (
        <h1>Dashboard</h1>
      )}
    </div>
  );
}
