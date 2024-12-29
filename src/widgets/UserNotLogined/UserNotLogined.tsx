"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

const RouteButton = styled.button`
  padding: 10px 20px,
  backgroundColor: #0070f3,
  color: #fff,
  border: none,
  borderRadius: 5px,
  cursor: pointer,
  fontSize: 16px,
`;

export const UserNotLogined = () => {
  const router = useRouter();
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <RouteButton onClick={() => navigateTo("/auth")}>
        Перейти на страницу аутентификации
      </RouteButton>
      <RouteButton onClick={() => navigateTo("/currency-charts")}>
        Перейти на страницу графиков валют
      </RouteButton>
      <RouteButton onClick={() => navigateTo("/guide")}>
        Перейти на страницу руководства
      </RouteButton>
    </div>
  );
};
