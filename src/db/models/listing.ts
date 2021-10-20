import mongoose from 'mongoose';

const COLLECTION_NAME = 'listingsAndReviews';
const listingSchema = new mongoose.Schema({
    _id: String,
    name: String,
    bedrooms: Number,
    beds: Number,
    bathrooms: Number,
    amenities: Object
})

const Listing = mongoose.model('Listing', listingSchema, COLLECTION_NAME);

export default Listing;