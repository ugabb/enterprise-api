import { Address, Enterprise, Prisma } from "@prisma/client";
import {
  EnterpriseRepository,
  EnterpriseWithAddress,
} from "../repositories/enterprise-repository";

interface GetEnterprisesResponse {
  enterprises: EnterpriseWithAddress[];
}

export class GetEnterprisesUseCase {
  constructor(private enterpriseRepository: EnterpriseRepository) {}

  async execute(): Promise<GetEnterprisesResponse> {
    const enterprises = await this.enterpriseRepository.getEnterprises();

    return {
      enterprises,
    };
  }
}
