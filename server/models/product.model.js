const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
 name: {
  type: String,
  trim: true,
  required: 'Name is required'
 },
 description: {
  type: String,
  trim: true,
  required: 'Description is required'
 },
 price: {
  type: Number,
  required:'Price is required'
 },
 published: {
  type: Boolean,
  default: true
 },
 category: {
  type: String,
  unique:'category already exists',
  required: 'Category is required'
 }
});

//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('Product', ProductSchema);