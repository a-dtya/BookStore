var express = require('express')
var { saveOrder, getOrderById, getAllOrders, EditOrderById, deleteOrder, deleteUserOrder ,getUserOrders} = require('../Controllers/ordersController')
var router = express.Router()
var ObjectId = require('mongodb').ObjectId;

router.post("/", async (req, res) => {
    var order = req.body
    order.user= new ObjectId(order.user)
    
    try {
        var newOrder = await saveOrder(order)
        res.status(201).json(newOrder)
    } catch (e) {
        res.status(422).json(e)
    }


})

router.patch('/:id', async (req, res) => {
    var status = req.body
   
    var id = req.params.id
    try {
        var edited = await EditOrderById(id, status.value)
        console.log(edited)
        res.json(edited)
    } catch (e) {
        res.json(e)
    }
})

router.get('/', async (req, res) => {

    try {
       let orders = await getAllOrders()
        res.json(orders)
    } catch (e) {
        res.json(e)
    }
})

router.get('/:id', async (req, res) => {
    console.log('params', req.params);
    try {
        const order = await getOrderById(req.params.id);
        res.json(order)
    } catch (e) {
        res.json(e)
    }
})

router.delete('/:id', async (req, res) => {
    var id = req.body.params
    try {
       let deletedTodo = await deleteOrder(id)
        res.json(deletedTodo)
    } catch (e) {
        res.json(e)
    }
})

router.delete('/', async (req, res) => {
    var id = req.o
    try {
       let deletedOrderdo = await deleteUserOrder(id)
        res.json("deleted all order")
    } catch (e) {
        res.json(e)
    }
})

router.get('/user/:id',async (req,res)=>{

    let id=req.params.id

    try{

        let userOrders= await getUserOrders(id)
        res.json(userOrders)

    }
    catch(err){
        res.json(err)

    }


})


module.exports = router