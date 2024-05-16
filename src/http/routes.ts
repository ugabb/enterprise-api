import { Router } from "express";

import { createEnterprise } from "./controllers/create-enterprise";
import { getEnterprises } from "./controllers/get-enterprises";

const router = Router();

router.post("/enterprise", createEnterprise);
router.get("/enterprise", getEnterprises);

export { router };
