import { Enterprise, Prisma } from "@prisma/client";
import { EnterpriseRepository } from "../repositories/enterprise-repository";

interface UpdateEnterpriseResponse {
  enterprise: Enterprise;
}

export class UpdateEnterpriseUseCase {
  constructor(private enterpriseRepository: EnterpriseRepository) {}

  async execute({
    id,
    name,
    address,
    purpose,
    ri_number,
    status,
  }: Prisma.EnterpriseUpdateInput): Promise<UpdateEnterpriseResponse> {
    if (typeof id !== "string") {
      throw new Error("id must be a string");
    }

    const enterpriseExists = await this.enterpriseRepository.getEnterpriseById(id);

    if (!enterpriseExists) {
      throw new Error("Enterprise not found");
    }

    const updatedEnterprise = await this.enterpriseRepository.updateEnterprise(id, {
      address: address,
      name: name,
      purpose: purpose,
      ri_number: ri_number,
      status: status,
    });

    return {
      enterprise: updatedEnterprise,
    };
  }
}
