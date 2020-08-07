const fs = require('fs');
const sha1 = require('sha1');
const responseSender = require('../../helpers/response-sender');

const ordersHandlerPost = (req, res) => {
    const {
        name,
        phone,
        deliveryAddress,
        productId,
        quantity
    } = req.body;

    if (
        !name
        || !phone
        || !deliveryAddress
        || !productId
        || !quantity
        || Object.keys(req.body).length !== 5
    ) {
        return responseSender(res, 422, 'You\'ve missed something important...');
    }

    const rawProductsData = fs.readFileSync('./BACKEND/DB/products.json');
    const rawCustomersData = fs.readFileSync('./BACKEND/DB/customers.json');
    const rawOrdersData = fs.readFileSync('./BACKEND/DB/orders.json');
    const productsData = JSON.parse(rawProductsData);
    const сustomersData = JSON.parse(rawCustomersData);
    const ordersData = JSON.parse(rawOrdersData);
    const product = productsData.find(p => p.id === productId);
    const isCustomerExist =
        сustomersData.some(customer => customer.name === name && customer.phone === phone);

    if (!product) {
        return responseSender(res, 404, 'Product not found!');
    }

    if (!isCustomerExist) {
        сustomersData.push({
            phone,
            name
        });
    }

    const orderToSave = {
        id: sha1(Date.now()),
        productId,
        quantity,
        deliveryAddress,
        price: (product.price * quantity).toFixed(2)
    };

    ordersData.push(orderToSave);

    try {
        fs.writeFileSync('./BACKEND/DB/customers.json', JSON.stringify(сustomersData));
        fs.writeFileSync('./BACKEND/DB/orders.json', JSON.stringify(ordersData));
        responseSender(res, 200, 'Success!');

    } catch (err) {
        responseSender(res, 500, err.message);
    }
};

module.exports = ordersHandlerPost;