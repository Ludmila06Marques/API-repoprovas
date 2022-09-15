import { Router } from "express";
import userRouter from "./userRoutes.js"
import testRoute from "./testRoutes.js";
import disciplineRoute from "./disciplineRouter.js";

const router = Router();

router.use(userRouter);
router.use(testRoute)
router.use(disciplineRoute)
export default router;