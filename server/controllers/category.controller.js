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
const categoryByID = (req, res, next, id) => {  }
const read = (req, res) => { }
const update = (req, res, next) => {  }
const remove = (req, res, next) => {  }
export default { create, categoryByID, read, list, remove, update }