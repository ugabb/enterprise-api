import { EnterpriseService } from "../../repositories/enterprise-service";
import { CreateEnterpriseUseCase } from "../create-enterprise-usecase";

export function makeCreateEnterprise(){
    const enterpriseService = new EnterpriseService();
    const useCase = new CreateEnterpriseUseCase(enterpriseService);
    
    return useCase
}