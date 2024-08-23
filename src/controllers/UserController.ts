import { Request, Response } from "express";
import { prisma } from "../database";

//class responsible for creating users
export default {
  // Asynchronous function to create a new user
  async createUser(req: Request, res: Response) {
    try {
      // Destructure name and email from the request body
      const { name, email } = req.body;

      // Validate email to ensure it is not undefined or empty
      if (!email) {
        return res.json({
          error: true,
          message: "Error: Email is required.",
        });
      }

      // Check if a user with the provided email already exists in the database
      const userExist = await prisma.user.findUnique({ where: { email } });

      // If the user already exists, return a JSON response indicating an error
      if (userExist) {
        return res.json({
          error: true,
          message: "Error: user already exist",
        });
      }

      // If the user does not exist, create a new user with the provided name and email
      const user = await prisma.user.create({
        data: {
          name,
          email,
        },
      });

      // Return a success response with the created user data
      return res.json({
        error: false,
        message: "Success: User registered successfully",
        user,
      });
    } catch (error) {
      // If an error occurs, return a JSON response with the error message
      return res.json({ message: error.message });
    }
  },
};
