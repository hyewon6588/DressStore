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
    const update = async (req, res) => { 
        try {
        let product = req.profile
        product = extend(product, req.body) 
        // user.updated = Date.now() 
        await user.save()
        // user.hashed_password = undefined
        // user.salt = undefined
        res.json(product) 
        } catch (err) {
        return res.status(400).json({
        error: errorHandler.getErrorMessage(err) 
        })
        } 
        }
        const remove = async (req, res) => { 
            try {
            let product = req.profile
            let deletedProduct = await product.remove() 
            // deletedProduct.hashed_password = undefined 
            // deletedUser.salt = undefined
            res.json(deletedProduct) 
            } catch (err) {
            return res.status(400).json({
            error: errorHandler.getErrorMessage(err) 
            })
            } 
            }
export default { create, productByID, read, list, remove, update }