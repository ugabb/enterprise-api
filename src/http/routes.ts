import { Router } from "express";

import { createEnterprise } from "./controllers/create-enterprise";
import { getEnterprises } from "./controllers/get-enterprises";
import { updateEnterprise } from "./controllers/update-enterprise";

const router = Router();

router.post("/enterprise", createEnterprise);
router.get("/enterprise", getEnterprises);
router.put("/enterprise/:id", updateEnterprise);

export { router };
