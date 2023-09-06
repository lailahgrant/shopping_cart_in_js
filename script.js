const product = [
    {
        id: 0,
        image: 'image/phone.png',
        title: 'Samsung Galaxy S Fold Open',
        price: '1,200,000',
    },
    {
        id: 1,
        image: 'image/phone-1.png',
        title: 'Huaweii p40',
        price: '900,000',
    },
    {
        id: 2,
        image: 'image/phone-2.png',
        title: 'Xiaomi Redmi Note 9',
        price: '1,400,000',
    },
    {
        id: 3,
        image: 'image/micro.png',
        title: 'Combi Grill Microwave',
        price: '500,000',
    },
    {
        id: 4,
        image: 'image/micro-1.png',
        title: 'Daewoo Retro Microwave',
        price: '450,000',
    },
    {
        id: 5,
        image: 'image/kettle.png',
        title: 'Tea Kettle',
        price: '600,000',
    },
];

const categories = [...new Set(product.map((item) =>
{ return item }))]
    
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) =>
{
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image} >
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>${price} ugx</h2>` +
                "<button onclick='addtocart("+(i++)+")'>Add to cart</button>" +
            `</div>
        </div> `
    )
}).join('')


var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displayCart();
}

function displayCart(a) {
    let j = 0;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your Cart is empty";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            return (
                `<div class='cart-item'>
                    <div class='row-image'>
                        <img class='row-img' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:18px;'>${price}</h2>
                    <i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i>
                </div>`
            );
        }).join('');
    }
}



