import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeDeleteEnterprises } from "@/use-cases/factories/make-delete-enterprise";
import { Request, Response } from "express";
import { z } from "zod";

export async function deleteEnterprise(req: Request, res: Response) {
  const deleteEnterpriseParamsSchema = z.object({
    id: z.string(),
  });

  const { id } = deleteEnterpriseParamsSchema.parse(req.params);

  try {
    const deleteEnterpriseUseCase = makeDeleteEnterprises();

    await deleteEnterpriseUseCase.execute(id);

    return res.status(200).json({ message: "Empreendimento Excluído" });
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return res.status(404).json({ message: "❌ Recurso não encontrado!" });
    }
  }
}
