import { Router } from "express";
import userRouter from "./userRoutes.js"
import testRoute from "./testRoutes.js";

const router = Router();

router.use(userRouter);
router.use(testRoute)

export default router;