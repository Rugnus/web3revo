"use server";

import { prisma } from "@/shared/libs/prisma/prisma";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, login, password, name, surname } = req.body;
  console.log(req.body);

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  res.setHeader("Content-Type", "application/json");

  try {
    const hashedPass = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPass,
        name,
        surname,
        login,
      },
    });

    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log(req.body);
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
