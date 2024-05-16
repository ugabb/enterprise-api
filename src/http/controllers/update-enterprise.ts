import { makeUpdateEnterprise } from "@/use-cases/factories/make-update-enterprise";
import { Request, Response } from "express";
import { z } from "zod";

export async function updateEnterprise(req: Request, res: Response) {
  const updateEnterpriseBodySchema = z.object({
    name: z.string().optional(),
    address: z
      .object({
        district: z.string().optional(),
        city: z.string().optional(),
        street: z.string().optional(),
        state: z.string().optional(),
        number: z.string().optional(),
        cep: z.string().optional(),
      })
      .optional(),
    purpose: z.string().optional(),
    ri_number: z.string().optional(),
    status: z.string().optional(),
  });

  const updateEnterpriseParamsSchema = z.object({
    id: z.string(),
  });

  const { name, address, purpose, ri_number, status } =
    updateEnterpriseBodySchema.parse(req.body);

  const { id } = updateEnterpriseParamsSchema.parse(req.params);

  const updateEnterpriseUseCase = makeUpdateEnterprise();

  await updateEnterpriseUseCase.execute({
    id,
    name,
    address: {
      update: {
        cep: address?.cep,
        city: address?.city,
        district: address?.district,
        number: address?.number,
        state: address?.state,
        street: address?.street,
      },
    },
    purpose,
    ri_number,
    status,
  });

  return res.status(200).json({ message: "Enterprise Updated" });
}
