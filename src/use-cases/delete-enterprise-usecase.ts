import { EnterpriseRepository } from "../repositories/enterprise-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

export class DeleteEnterpriseUseCase {
  constructor(private enterpriseRepository: EnterpriseRepository) {}

  async execute(id: string): Promise<void> {
    const enterpriseExists =
      await this.enterpriseRepository.getEnterpriseById(id);

    if (!enterpriseExists) {
      throw new ResourceNotFoundError();
    }

    await this.enterpriseRepository.deleteEnterprise(id);
  }
}
