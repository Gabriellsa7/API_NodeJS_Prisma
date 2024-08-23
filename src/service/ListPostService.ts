import { IPostRepository } from "../interfaces/IPostRepository";

export class ListPostService {
  constructor(private postRepository: IPostRepository) {}

  async execute(id: number) {
    const post = await this.postRepository.findById(id);
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  }
}
