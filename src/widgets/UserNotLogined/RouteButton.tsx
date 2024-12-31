"use client";

import { FC } from "react";
import { SRouteButton } from "./SUserNotLogined";

import { useRouter } from "next/navigation";

export const RouteButton: FC<{
  title: string;
  description: string;
  path: string;
  style?: React.CSSProperties;
}> = ({ title, description, path, style }) => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <SRouteButton onClick={() => navigateTo(path)} style={style}>
      <h3>{title}</h3>
      <p>{description}</p>
    </SRouteButton>
  );
};
