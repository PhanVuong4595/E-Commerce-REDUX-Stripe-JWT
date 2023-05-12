import express from "express";
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/verifyToken";
import {
  cartCreate,
  cartDelete,
  cartGetAllProduct,
  cartGetProduct,
  cartUpdate,
} from "../controllers/cartControllers";

const router = express.Router();

router.get("/products", verifyTokenAndAdmin, cartGetAllProduct);
router.get("/products/:userId", verifyTokenAndAuthorization, cartGetProduct);
router.delete("/products/:id", verifyTokenAndAuthorization, cartDelete);
router.put("/products/:id", verifyTokenAndAuthorization, cartUpdate);
router.post("/products", verifyToken, cartCreate);

export default router;
