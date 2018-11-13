import { Schema, Document, Model, model } from "mongoose";

const address = new Schema({
    zipcode: Number,
    street: String,
    number: Number,
    complement: String,
    district: String,
    city: String,
    state: String
});

const contact = new Schema({
    name: String,
    description: String,
    phone: Number,
    email: String
})

const ingredient = new Schema({
    epoc_id: Number,
    name: String,
    price: Number,
    type: String
});

const product = new Schema({
    epoc_id: Number,
    name: String,
    image: String,
    description: String,
    featured: Boolean,
    price: Number,
    ingredients: [ingredient]
})

const subCategory = new Schema({
    name: String,
    products: [product]
});

const category = new Schema({
    name: String,
    image: String,
    subCategory: [subCategory]
})

const responsibleEmployee = new Schema({
    epoc_id: String,
    name: String
})

const restaurantEntity: Schema = new Schema({
    restaurant_id_cloud : Number,
    hash : String,
    name: {
        type: String,
        required: false
    },
    cnpj: {
        type: Number,
        required: false
    },
    number_of_tables: {
        type: Number,
        required: false
    },
    number_of_employees: {
        type: Number,
        required: false
    },
    status: {
        type: Boolean,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    // mensalidade: {
    //     type: String,
    //     required: false
    // },
    categories: [category],
    contact: [contact],
    responsibleEmployee: [responsibleEmployee],
    address: address
});

export const RestaurantEntity: Model<any> = model("restaurant", restaurantEntity, "restaurant", true);
