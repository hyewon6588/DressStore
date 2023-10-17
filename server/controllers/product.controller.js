import Product from '../models/product.model.js'
import extend from 'lodash/extend'
import errorHandler from './error.controller'
const create = async (req, res) => { 
    const product = new Product(req.body) 
    try {
    await user.save()
    return res.status(200).json({ 
    message: "Successfully added product!"
    })
    } catch (err) {
    return res.status(400).json({
    error: errorHandler.getErrorMessage(err) 
    })
    } 
}
const list = async (req, res) => { 
	try {
	let products = await Product.find().select('name description price published category') 
	res.json(products)
	} catch (err) {
	return res.status(400).json({
	error: errorHandler.getErrorMessage(err) 
	})
	} 
	}
const productByID = (req, res, next, id) => {  }
const read = (req, res) => { }
const update = (req, res, next) => {  }
const remove = (req, res, next) => {  }
export default { create, productByID, read, list, remove, update }