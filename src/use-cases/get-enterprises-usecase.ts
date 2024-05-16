import { Enterprise, Prisma } from "@prisma/client";
import { EnterpriseRepository } from "../repositories/enterprise-repository";

interface GetEnterprisesResponse {
  enterprise: Enterprise[];
}

export class GetEnterprisesUseCase {
  constructor(private enterpriseRepository: EnterpriseRepository) {}

  async execute(): Promise<GetEnterprisesResponse> {
    const enterprise = await this.enterpriseRepository.getEnterprises();

    return {
      enterprise,
    };
  }
}
