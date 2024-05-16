import { Enterprise, Prisma } from "@prisma/client";
import { EnterpriseRepository } from "./enterprise-repository";

import { prisma } from "../lib/prisma";

export class EnterpriseService implements EnterpriseRepository {
  async createEnterprise(
    data: Prisma.EnterpriseCreateInput
  ): Promise<Enterprise> {
    const enterprise = await prisma.enterprise.create({ data });

    return enterprise;
  }
  async getEnterprises(): Promise<Enterprise[]> {
    const enterpriseList = await prisma.enterprise.findMany();

    return enterpriseList;
  }

  async getEnterpriseById(id: string): Promise<Enterprise | null> {
    const enterprise = await prisma.enterprise.findUnique({
      where: { id },
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
