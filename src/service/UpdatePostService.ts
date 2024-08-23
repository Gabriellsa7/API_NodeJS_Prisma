import { IPostRepository } from "../interfaces/IPostRepository";

export class UpdatePostService {
  constructor(private postRepository: IPostRepository) {}

  async execute(id: number, title: string, content: string) {
    const postExists = await this.postRepository.findById(id);
    if (!postExists) {
      throw new Error("Post not found");
    }

    const post = await this.postRepository.update(id, title, content);
    return post;
  }
}
