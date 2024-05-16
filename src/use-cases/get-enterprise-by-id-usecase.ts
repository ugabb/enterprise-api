import { Enterprise, Prisma } from "@prisma/client";
import { EnterpriseRepository } from "../repositories/enterprise-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface GetBydIdEnterpriseResponse {
  enterprise: Enterprise;
}

export class GetBydIdEnterpriseUseCase {
  constructor(private enterpriseRepository: EnterpriseRepository) {}

  async execute(id: string): Promise<GetBydIdEnterpriseResponse> {
    const enterprise = await this.enterpriseRepository.getEnterpriseById(id);

    if (!enterprise) {
      throw new ResourceNotFoundError();
    } else {
    }

    return {
      enterprise,
    };
  }
}
