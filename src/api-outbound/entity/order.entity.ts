import { Schema, Document, Model, model } from "mongoose";

const ingredient = {
    epoc_id: Number,
    name: String,
    price: Number
}

const products = {
    epoc_id: Number,
    name: String,
    quantity: Number,
    amount: Number,
    price: Number,
    ingredients: [ingredient]
}

const orderEntity: Schema = new Schema({
    table: {
        type: Number,
        required: false
    },
    ticket: String,
    customers: {
        type: String,
        required: false
    },
    amount: {
        type: String ,
        required: false
    },
    status: {
        type: Boolean,
        required: false
    },
    responsibleEmployee: {
        epoc_id: String,
        name: String
    },
    createdAt: Date,
    updatedAt: Date,
    products: [products],
    restaurant: {
        name: String,
        cnpj: String
    }
});

export const OrderEntity: Model<any> = model("order", orderEntity, "order", true);
