import { EnterpriseService } from "../../repositories/enterprise-service";
import { UpdateEnterpriseUseCase } from "../update-enterprise-usecase";

export function makeUpdateEnterprise(){
    const enterpriseService = new EnterpriseService();
    const useCase = new UpdateEnterpriseUseCase(enterpriseService);
    
    return useCase
}