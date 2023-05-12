import express from "express";
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/verifyToken";
import {
  productCreate,
  productDelete,
  productGetAllProduct,
  productGetProduct,
  productUpdate,
} from "../controllers/productControllers";

const router = express.Router();

router.get("/products", productGetAllProduct);
router.get("/products/:id", productGetProduct);
router.delete("/products/:id", verifyTokenAndAdmin, productDelete);
router.put("/products/:id", verifyTokenAndAdmin, productUpdate);
router.post("/products", verifyTokenAndAdmin, productCreate);

export default router;
