import { Request, Response } from "express";
import { prisma } from "../database";
import { CreatePostService } from "../service/CreatePostService";
import { PostRepository } from "../repositories/PostRepository";
import { ListPostService } from "../service/ListPostService";
import { UpdatePostService } from "../service/UpdatePostService";
import { DeletePostService } from "../service/DeletePostService";

//class responsible for creating posts
export default {
  // Asynchronous function to create a new post
  async createPost(req: Request, res: Response) {
    try {
      // Destructure title, content and userId from the request body
      const { title, content, userId } = req.body;

      // Create an instance of CreatePostService, injecting a new instance of PostRepository as a dependency
      const createPost = new CreatePostService(new PostRepository());

      // Execute the createPost service with the provided title, content, and userId
      const post = await createPost.execute(title, content, userId);

      // Return a success response with the created post data
      return res.json({
        error: false,
        message: "Success: Post registered successfully",
        post,
      });
    } catch (error) {
      // If an error occurs, return a JSON response with the error message
      return res.json({ message: error.message });
    }
  },

  // Asynchronous function to list a specific post by its ID
  async listPost(req: Request, res: Response) {
    try {
      // Extract the post ID from request parameters
      const { id } = req.params;

      // Create an instance of ListPostService, injecting a new instance of PostRepository
      const listPost = new ListPostService(new PostRepository());

      // Execute the listPost service to find the post by its ID
      const post = await listPost.execute(Number(id));

      // Return the post data in the response
      return res.json({
        error: false,
        post,
      });
    } catch (error) {
      // If an error occurs, return a JSON response with the error message
      return res.json({ message: error.message });
    }
  },

  // Asynchronous function to update an existing post
  async updatePost(req: Request, res: Response) {
    try {
      // Destructure id, title, and content from the request body
      const { id, title, content } = req.body;

      // Create an instance of UpdatePostService, injecting a new instance of PostRepository
      const updatePost = new UpdatePostService(new PostRepository());

      // Execute the updatePost service to update the post with the provided id, title, and content
      const post = await updatePost.execute(Number(id), title, content);

      // Return a success response with the updated post data
      return res.json({
        error: false,
        message: "Success: Post updated successfully",
        post,
      });
    } catch (error) {
      // If an error occurs, return a JSON response with the error message
      return res.json({ message: error.message });
    }
  },

  // Asynchronous function to delete a post by its ID
  async deletePost(req: Request, res: Response) {
    try {
      // Extract the post ID from request parameters
      const { id } = req.params;

      // Create an instance of DeletePostService, injecting a new instance of PostRepository
      const deletePost = new DeletePostService(new PostRepository());

      // Execute the deletePost service to remove the post with the specified ID
      await deletePost.execute(Number(id));

      // Return a success response indicating that the post was deleted
      return res.json({
        error: false,
        message: "Success: Post deleted successfully",
      });
    } catch (error) {
      // If an error occurs, return a JSON response with the error message
      return res.json({ message: error.message });
    }
  },
};
