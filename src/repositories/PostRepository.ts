import { Post } from "@prisma/client";
import { IPostRepository } from "../interfaces/IPostRepository";
import { prisma } from "../database";

class PostRepository implements IPostRepository {
  public async create(
    title: string,
    content: string,
    userId: number
  ): Promise<Post> {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId,
      },
    });

    return post;
  }
  async findById(id: number): Promise<Post | null> {
    return prisma.post.findUnique({ where: { id } });
  }

  async findAll(): Promise<Post[]> {
    return prisma.post.findMany();
  }

  async update(id: number, title: string, content: string): Promise<Post> {
    return prisma.post.update({
      where: { id },
      data: { title, content },
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.post.delete({ where: { id } });
  }
}

export { PostRepository };
