import express from 'express'
import productCtrl from '../controllers/category.controller.js'
const router = express.Router()
router.route('/api/categories') 
.get(categoryCtrl.list)
.post(categoryCtrl.create)
router.route('/api/categories/:categoryId') 
.get(categoryCtrl.read)
.put(categoryCtrl.update) 
.delete(categoryCtrl.remove)
router.param('categoryId', categoryCtrl.categoryByID)
router.route('/api/categories').post(categoryCtrl.create)
router.route('/api/categories').get(categoryCtrl.list)
export default router