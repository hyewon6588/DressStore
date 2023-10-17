import Category from '../models/category.model.js'
import extend from 'lodash/extend'
import errorHandler from './error.controller'
const create = async (req, res) => { 
    const category = new Category(req.body) 
    try {
    await user.save()
    return res.status(200).json({ 
    message: "Successfully added category!"
    })
    } catch (err) {
    return res.status(400).json({
    error: errorHandler.getErrorMessage(err) 
    })
    } 
}
const list = async (req, res) => { 
	try {
	let categories = await Category.find().select('name') 
	res.json(categories)
	} catch (err) {
	return res.status(400).json({
	error: errorHandler.getErrorMessage(err) 
	})
	} 
	}
    const categoryByID = async (req, res, next, id) => { 
        try {
        let category = await Category.findById(id) 
        if (!category)
        return res.status('400').json({ 
        error: "Category not found"
        })
        req.profile = category 
        next()
        } catch (err) {
        return res.status('400').json({ 
        error: "Could not retrieve category"
        }) 
        }
        }
const read = (req, res) => {
    // req.profile.hashed_password = undefined 
    // req.profile.salt = undefined
    return res.json(req.profile) 
    }
const update = async (req, res) => { 
        try {
        let category = req.profile
        category = extend(category, req.body) 
        // user.updated = Date.now() 
        await user.save()
        // user.hashed_password = undefined 
        // user.salt = undefined
        res.json(category) 
        } catch (err) {
        return res.status(400).json({
        error: errorHandler.getErrorMessage(err) 
        })
        } 
        }
        const remove = async (req, res) => { 
            try {
            let category = req.profile
            let deletedCategory = await category.remove() 
            // deletedUser.hashed_password = undefined 
            // deletedUser.salt = undefined
            res.json(deletedCategory) 
            } catch (err) {
            return res.status(400).json({
            error: errorHandler.getErrorMessage(err) 
            })
            } 
            }
export default { create, categoryByID, read, list, remove, update }