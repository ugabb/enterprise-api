import { Router } from "express";

import { createEnterprise } from "./controllers/create-enterprise";
import { getEnterprises } from "./controllers/get-enterprises";
import { updateEnterprise } from "./controllers/update-enterprise";
import { deleteEnterprise } from "./controllers/delete-enterprise";

const router = Router();

router.post("/enterprise", createEnterprise);
router.get("/enterprise", getEnterprises);
router.put("/enterprise/:id", updateEnterprise);
router.delete("/enterprise/:id", deleteEnterprise);

export { router };
