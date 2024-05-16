import { EnterpriseService } from "../../repositories/enterprise-service";
import { DeleteEnterpriseUseCase } from "../delete-enterprise-usecase";

export function makeDeleteEnterprises(){
    const enterpriseService = new EnterpriseService();
    const useCase = new DeleteEnterpriseUseCase(enterpriseService);
    
    return useCase
}