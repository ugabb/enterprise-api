import { EnterpriseService } from "../../repositories/enterprise-service";
import { GetBydIdEnterpriseUseCase } from "../get-enterprise-by-id-usecase";

export function makeEnterpriseById() {
  const enterpriseService = new EnterpriseService();
  const useCase = new GetBydIdEnterpriseUseCase(enterpriseService);

  return useCase;
}
