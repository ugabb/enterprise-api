import { EnterpriseService } from "../../repositories/enterprise-service";
import { UpdateEnterpriseUseCase } from "../update-enterpries-usecase";

export function makeUpdateEnterprise(){
    const enterpriseService = new EnterpriseService();
    const useCase = new UpdateEnterpriseUseCase(enterpriseService);
    
    return useCase
}