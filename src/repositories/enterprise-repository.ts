import { Enterprise, Prisma } from "@prisma/client";

export interface EnterpriseRepository {
  createEnterprise(data: Prisma.EnterpriseCreateInput): Promise<Enterprise>;
  getEnterprises(): Promise<Enterprise[]>;
  updateEnterprise(id: string, data: any): Promise<Enterprise>;
  deleteEnterprise(id: string): Promise<void>;
}
