import { Router } from "express";
import userRoutes from "./users/route";
import tagRoutes from "./tags/route";
import levelRoutes from "./levels/route";
import currencyRoutes from "./currencies/route";
import jobTypeRoutes from "./job-types/route";

const router = Router();

router.use("/v1/users", userRoutes);
router.use("/v1/tags", tagRoutes);
router.use("/v1/levels", levelRoutes);
router.use("/v1/currencies", currencyRoutes);
router.use("/v1/job-types", jobTypeRoutes);

export default router;
