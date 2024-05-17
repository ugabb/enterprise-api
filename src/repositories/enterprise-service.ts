import { Address, Enterprise, Prisma } from "@prisma/client";
import {
  EnterpriseRepository,
  EnterpriseWithAddress,
} from "./enterprise-repository";

import { prisma } from "../lib/prisma";

type EnterpriseCreateInputWithAddress = Prisma.EnterpriseCreateInput & {
  address: Prisma.AddressCreateInput;
};

export class EnterpriseService implements EnterpriseRepository {
  async createEnterprise(
    data: EnterpriseCreateInputWithAddress
  ): Promise<Enterprise> {
    const enterprise = await prisma.enterprise.create({
      data,
    });

    return enterprise;
  }

  async getEnterprises(): Promise<EnterpriseWithAddress[]> {
    const enterpriseList = await prisma.enterprise.findMany({
      include: {
        address: true,
      },
    });

    return enterpriseList;
  }

  async getEnterpriseById(id: string): Promise<EnterpriseWithAddress | null> {
    const enterprise = await prisma.enterprise.findUnique({
      where: { id },
      include: {
        address: true,
      },
    });

    return enterprise;
  }

  async updateEnterprise(
    id: string,
    data: Prisma.EnterpriseUpdateInput
  ): Promise<Enterprise> {
    const enterprise = await prisma.enterprise.update({
      where: { id },
      data,
    });

    return enterprise;
  }
  async deleteEnterprise(id: string): Promise<void> {
    await prisma.enterprise.delete({ where: { id } });
  }
}
