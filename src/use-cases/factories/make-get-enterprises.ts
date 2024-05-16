import { EnterpriseService } from "../../repositories/enterprise-service";
import { GetEnterprisesUseCase } from "../get-enterprises-usecase";

export function makeGetEnterprises(){
    const enterpriseService = new EnterpriseService();
    const useCase = new GetEnterprisesUseCase(enterpriseService);
    
    return useCase
}