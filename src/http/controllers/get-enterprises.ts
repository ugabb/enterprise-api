import { Request, Response } from "express";
import { makeGetEnterprises } from "../../use-cases/factories/make-get-enterprises";

export async function getEnterprises(req: Request, res: Response) {
  const getEnterprisesUseCase = makeGetEnterprises();

  const enterprises = await getEnterprisesUseCase.execute();

  return res.status(200).json(enterprises);
}
