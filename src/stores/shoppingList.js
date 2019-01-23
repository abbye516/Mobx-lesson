import { observable, action } from 'mobx'

class Item {
    @observable location = "Super Sell!"
    @observable name
    @observable completed = false
    constructor(name) {
        this.name = name
    }
}

let potatoes = new Item("Potatoes")
let corn = new Item("Corn")
let sombreros = new Item("sombreros")

class ShoppingList{
    @observable list = []
    @observable length
    @action checkItem = (name) =>{
        let item = this.list.find(i=> i.name===name)
        item.completed = !item.completed
    }
    @action
    addItem(name){
        this.list.push(new Item(name))
    }
    @action
    updateLocation(value, location){
        let itemToUpdate = this.list.find(i => i.name === value)
        itemToUpdate.location = location   
    }
    @action
    deleteItem(value){
        let index = this.list.findIndex(i=> i.name === value)
        this.list.splice(index,1)
    }
}

let groceryList = new ShoppingList()
groceryList.list.push(potatoes)
groceryList.list.push(corn, sombreros)
groceryList.addItem("carrots")
groceryList.addItem("apples")
groceryList.addItem("corn")
groceryList.addItem("salsa")

export default groceryList