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
const productByID = async (req, res, next, id) => { 
        try {
        let product = await Product.findById(id) 
        if (!product)
        return res.status('400').json({ 
        error: "Product not found"
        })
        req.profile = product 
        next()
        } catch (err) {
        return res.status('400').json({ 
        error: "Could not retrieve product"
        }) 
        }
        }
const read = (req, res) => {
        // req.profile.hashed_password = undefined 
        // req.profile.salt = undefined
        return res.json(req.profile) 
    }
const update = (req, res, next) => {  }
const remove = (req, res, next) => {  }
export default { create, productByID, read, list, remove, update }