import { Router } from "express";
import userRoutes from "./users/route";
import tagRoutes from "./tags/route";
import levelRoutes from "./levels/route";

const router = Router();

router.use("/v1/users", userRoutes);
router.use("/v1/tags", tagRoutes);
router.use("/v1/levels", levelRoutes);

export default router;
