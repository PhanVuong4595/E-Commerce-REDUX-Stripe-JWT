import express from "express";
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/verifyToken";
import {
  orderCreate,
  orderDelete,
  orderGetAllProduct,
  orderGetUser,
  orderMonthlyIncome,
  orderUpdate,
} from "../controllers/orderControllers";

const router = express.Router();

router.get("/order-income", verifyTokenAndAdmin, orderMonthlyIncome);
router.get("/order", verifyTokenAndAdmin, orderGetAllProduct);
router.get("/order/:userId", verifyTokenAndAuthorization, orderGetUser);
router.delete("/order/:id", verifyTokenAndAdmin, orderDelete);
router.put("/order/:id", verifyTokenAndAdmin, orderUpdate);
router.post("/order", verifyToken, orderCreate);

export default router;
