import { Post } from "@prisma/client";

// type Post = {
//   id: number;
//   title: string | null;
//   content: string;
//   userId: number;
// }

export interface IPostRepository {
  create(title: string, content: string, userId: number): Promise<Post>;
  findById(id: number): Promise<Post | null>;
  findAll(): Promise<Post[]>;
  update(id: number, title: string, content: string): Promise<Post>;
  delete(id: number): Promise<void>;
}
