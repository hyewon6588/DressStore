import mongoose from 'mongoose'
// const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
 name: {
  type: String,
  trim: true,
  unique:'category already exists',
  required: 'Name is required'
 }
});

// module.exports = mongoose.model('Category', CategorySchema);
export default mongoose.model('Category', CategorySchema);