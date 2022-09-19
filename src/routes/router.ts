import { Router } from "express";
import userRouter from "./userRoutes.js"
import testRoute from "./testRoutes.js";
import disciplineRoute from "./disciplineRouter.js";
import termRoute from "./termRouter.js";
import categoryRoute from "./categoryRouter.js";

const router = Router();

router.use(userRouter);
router.use(testRoute)
router.use(disciplineRoute)
router.use(termRoute)
router.use(categoryRoute)

export default router;