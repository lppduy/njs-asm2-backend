const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ['Hotel', 'Apartments', 'Resorts', 'Villas', 'Cabins'] },
  city: { type: String, required: true },
  address: { type: String, required: true },
  distance: { type: String, required: true },
  photos: { type: [String] },
  desc: { type: String },
  rating: { type: Number, min: 0, max: 5 },
  featured: { type: Boolean, default: false },
  rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }],
}, { timestamps: true });

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;
