import { Enterprise, Prisma } from "@prisma/client";

export interface EnterpriseRepository {
  createEnterprise(data: Prisma.EnterpriseCreateInput): Promise<Enterprise>;
  getEnterprises(): Promise<Enterprise[]>;
  getEnterpriseById(id: string): Promise<Enterprise | null>;
  updateEnterprise(id: string, data: Prisma.EnterpriseUpdateInput): Promise<Enterprise>;
  deleteEnterprise(id: string): Promise<void>;
}
