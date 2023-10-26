//order raw model
class OrderRaw {
    constructor(customer_id, order_id, date, item_id, item_name, price, qty) {
        this.customer_id = customer_id;
        this.order_id = order_id;
        this.date = date;
        this.item_id = item_id;
        this.item_name = item_name;
        this.price = price;
        this.qty = qty;
    }
}