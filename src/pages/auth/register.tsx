"use client";

import { TUser } from "@/entities";
import { registerUser } from "@/processes/auth/register";
import React, { FC, useState } from "react";

export const RegisterPage: FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const login = formData.get("login") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    const surname = formData.get("surname") as string;

    const user: TUser = {
      email,
      login,
      password,
      name,
      surname,
    };

    if (!email || !login || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await registerUser(user);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message || "Failed to register user.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleRegister}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label>
          Login:
          <input type="text" name="login" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>

        <label>
          email:
          <input type="email" name="email" required />
        </label>

        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Surname:
          <input type="text" name="surname" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
