import { IPostRepository } from "../interfaces/IPostRepository";

export class DeletePostService {
  constructor(private postRepository: IPostRepository) {}

  async execute(id: number) {
    const postExists = await this.postRepository.findById(id);
    if (!postExists) {
      throw new Error("Post not found");
    }

    await this.postRepository.delete(id);
  }
}
