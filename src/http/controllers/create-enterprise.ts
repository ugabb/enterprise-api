import { Request, Response } from "express";
import { z } from "zod";
import { makeCreateEnterprise } from "../../use-cases/factories/make-create-enterprise";

export async function createEnterprise(req: Request, res: Response) {
  const createEnterpriseBodySchema = z.object({
    name: z.string(),
    address: z.object({
        district: z.string(),
        city: z.string(),
        street: z.string(),
        state: z.string(),
        number: z.string(),
        cep: z.string(),
    }),
    purpose: z.string(),
    ri_number: z.string(),
    status: z.string(),
  });

  const { name, address, purpose, ri_number, status } =
    createEnterpriseBodySchema.parse(req.body);

  const createEnterpriseUseCase = makeCreateEnterprise();

  await createEnterpriseUseCase.execute({
    name,
    address:{
        create:{
            cep: address.cep,
            city: address.city,
            district: address.district,
            number: address.number,
            state: address.state,
            street: address.street,
        }
    },
    purpose,
    ri_number,
    status,
  });

  return res.status(201).json({ message: "Enterprise created" });
}
