const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
    // Никакие доп.проверки не делал, по типу на несуществование товара, поскольку в ТЗ это не сказано, как и сказано не менять другой код)
    // Вначале хотел проводить проверку на основании того, что к объекту можно обращаться как к ассоциативному массиву, но отказался в силу неясности кода order.includes(products[productId - 1])
    
    const productToAdd = products.find(product => product.id === productId);
    
    if(order.includes(productToAdd)) {
        alert("Товар уже находится в корзине")
    }
    // TODO: если товар еще не в корзине, добавить его из массива products
    else {
        order.push(productToAdd)
    }
    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    // TODO: описать логику удаления товара из корзины
    const productToRemove = products.find(product => product.id === productId);
    order = order.filter(orderItem => orderItem !== productToRemove)
    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice() {
    // TODO: опишите функционал подсчета общей стоимости заказа
    const totalPrice = order.reduce((acc, curr) => acc += curr.price, 0)
    // Не меняйте эту строчку
    document.getElementById('total').innerText = totalPrice;
}

// Этот метод остается без изменений
function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}