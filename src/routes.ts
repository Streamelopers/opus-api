import { Router } from "express";
import userRoutes from "./users/route";
import tagRoutes from "./tags/route";

const router = Router();

router.use("/v1/users", userRoutes);
router.use("/v1/tags", tagRoutes);

export default router;
