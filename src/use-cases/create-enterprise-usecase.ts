import { Enterprise, Prisma } from "@prisma/client";
import { EnterpriseRepository } from "../repositories/enterprise-repository";

interface CreateEnterpriseResponse {
  enterprise: Enterprise;
}

export class CreateEnterpriseUseCase {
  constructor(private enterpriseRepository: EnterpriseRepository) {}

  async execute({
    name,
    address,
    purpose,
    ri_number,
    status,
  }: Prisma.EnterpriseCreateInput): Promise<CreateEnterpriseResponse> {
    const enterprise = await this.enterpriseRepository.createEnterprise({
      address,
      name,
      purpose,
      ri_number,
      status,
    });

    return {
      enterprise,
    };
  }
}
