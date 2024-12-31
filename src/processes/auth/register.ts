import { TUser } from "@/entities";

export const registerUser = async (user: TUser) => {
  console.log(user);

  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        name: user.name,
        surname: user.surname,
        login: user.login,
      }),
    });

    console.log("Response:", response);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Registration failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
