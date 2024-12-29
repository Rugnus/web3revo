"use client";

import { useRouter } from "next/navigation";

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
      <button onClick={() => navigateTo("/auth")} style={buttonStyle}>
        Перейти на страницу аутентификации
      </button>
      <button
        onClick={() => navigateTo("/currency-charts")}
        style={buttonStyle}
      >
        Перейти на страницу графиков валют
      </button>
      <button onClick={() => navigateTo("/guide")} style={buttonStyle}>
        Перейти на страницу руководства
      </button>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#0070f3",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};
