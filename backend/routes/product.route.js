import express from 'express';
import { getAllProducts,getFeaturedProducts,createProduct,getRecommendedProducts,getProductsByCategory,toggleFeaturedProduct} from '../controllers/product.controller.js';
import { adminRoute, protectRoute } from '../middleware/auth.middleware.js';
import { deleteProduct } from '../controllers/product.controller.js';
const router = express.Router();


router.get('/',protectRoute, adminRoute, getAllProducts)
router.get('/featured',getFeaturedProducts)
router.get('/category/:category',getProductsByCategory)
router.get('/recommended',getRecommendedProducts)
router.patch('/:id',protectRoute, adminRoute,toggleFeaturedProduct)
router.post('/',protectRoute, adminRoute,createProduct)
router.delete('/:id',protectRoute, adminRoute,deleteProduct)


export default router;