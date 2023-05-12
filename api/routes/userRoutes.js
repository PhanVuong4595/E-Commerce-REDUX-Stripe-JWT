import express from "express";

import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/verifyToken";
import {
  userDelete,
  userGet,
  userGetAll,
  userStats,
  userUpdate,
} from "../controllers/userControllers";

const router = express.Router();

router.get("/user-stats", verifyTokenAndAdmin, userStats);
router.get("/user", verifyTokenAndAuthorization, userGetAll);
router.get("/user/:id", verifyTokenAndAdmin, userGet);
router.delete("/user/:id", verifyTokenAndAuthorization, userDelete);
router.put("/user/:id", verifyTokenAndAuthorization, userUpdate);

export default router;
