import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeEnterpriseById } from "@/use-cases/factories/make-get-enterprise-by-id";
import { Request, Response } from "express";
import { z } from "zod";

export async function getEnterpriseById(req: Request, res: Response) {
  const getEnterpriseByIdParamsSchema = z.object({
    id: z.string(),
  });

  const { id } = getEnterpriseByIdParamsSchema.parse(req.params);

  try {
    const getEnterpriseByIdUseCase = makeEnterpriseById();

    const enterprise = await getEnterpriseByIdUseCase.execute(id);

    return res.status(200).json(enterprise);
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return res.status(404).json({ message: "❌ Recurso não encontrado!" });
    }
  }
}
