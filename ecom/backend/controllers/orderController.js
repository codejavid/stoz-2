import Order from "../models/Order.js";

// @desc Create new order
// @route POST / pai/orders

export const createOrder = async(req, res) => {


    try{

        const {orderItems, totalPrice, shippingAddress} = req.body;

        console.log(orderItems, totalPrice, shippingAddress);

        if(orderItems && orderItems.length === 0){
            res.status(404).json({message:"No order items"});
            return;
        }

        const order = new Order({
            user:req.user._id,
            orderItems, 
            totalPrice,
            shippingAddress
        });

        const createOrder = await order.save();
        res.status(201).json(createOrder);


    }catch(error){
        res.status(500).json({ message: error.message });
    }

}


// @desc Get My order
// @route GET /api/orders/myorders

export const getMyOrders = async(req, res) => {

    try{

        const orders = await Order.find({user:req.user._id});
        res.json(orders);

    }catch(error){
        res.status(500).json({ message: error.message });
    }

}


// @desc Get all order (admin only)
// @route GET /api/orders

export const getAllOrders = async(req, res) => {

    try{

        const orders = await Order.find({});
        res.json(orders);

    }catch(error){
        res.status(500).json({ message: error.message });
    }

}