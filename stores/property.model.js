import { model, Schema, models } from "mongoose";

const PropertySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    redirecturl: {
        type: String,
    },
    imagescr: {
        type: String,
        required: true
    },    
    summary: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
    },
    ratingStatus: {
        type: String,
    },
    reviews: {
        type: Number,
    },
    price: {
        type: Number,
    }
});

const PropertyModel = models.property || model("property", PropertySchema);
export { PropertyModel };