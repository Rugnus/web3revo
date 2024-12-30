"use client";

import { UserNotLogined } from "@/widgets";
import { RootState, useAppSelector } from "./store";

export default function Home() {
  const user = useAppSelector((state: RootState) => state.initialState.user);

  const isUserLogined = user;

  return (
    <div>
      {!isUserLogined ? (
        <div>
          <UserNotLogined />
        </div>
      ) : (
        <h1>Dashboard</h1>
      )}
    </div>
  );
}
