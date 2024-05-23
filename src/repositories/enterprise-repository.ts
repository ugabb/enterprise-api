import { Address, Enterprise, Prisma } from "@prisma/client";

export type EnterpriseWithAddress = {
  address: {
    id: string;
    district: string;
    city: string;
    street: string;
    state: string;
    number: string;
    cep: string;
  };
} & {
  id: string;
  name: string;
  status: string;
  purpose: string;
  ri_number?: string;
  addressId: string;
};

export interface EnterpriseRepository {
  createEnterprise(data: Prisma.EnterpriseCreateInput): Promise<Enterprise>;
  getEnterprises(): Promise<EnterpriseWithAddress[]>;
  getEnterpriseById(id: string): Promise<EnterpriseWithAddress | null>;
  updateEnterprise(
    id: string,
    data: Prisma.EnterpriseUpdateInput
  ): Promise<Enterprise>;
  deleteEnterprise(id: string): Promise<void>;
}
