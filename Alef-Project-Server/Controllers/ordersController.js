var OrderModel=require('../models/order')


const ordersController = {
  async saveOrder(order) {
    return  (await OrderModel.create(order)).populate('user')
  },
  async getAllOrders(){
    return await OrderModel.find({}).populate('user').populate("items.book._id");
  },
  
  async getOrderById(id) {
    return await OrderModel.findById(id)
  },
  
  async  EditOrderById(id ,status){
    return await OrderModel.updateOne({_id:id},{status})
  },
  
  async deleteOrder(id){
    return await OrderModel.deleteOne(id)
  },
  
  async deleteUserOrder(id){
    return await OrderModel.deleteOne({userId:id})
  },

  async getUserOrders (id){

    return await OrderModel.find({user:id})
  }
}

module.exports = ordersController