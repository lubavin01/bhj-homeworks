const controls = document.querySelectorAll('.product__quantity-control');
const addToBasket = document.querySelectorAll('.product__add');

const cartProductsBlock = document.querySelector('.cart__products');
const cartBlock = document.querySelector('.cart');

const deleteCartElement = (e) => {

    const product = e.target.closest('.cart__product');
    cartProductsBlock.removeChild(product);

    if (![...cartProductsBlock.children].length) {
        cartBlock.classList.add('visually-hidden');
    }
}

const createCartElement = (productBlock) => {
    const image = productBlock.querySelector('.product__image');
    const productId = productBlock.dataset.id;
    const productQuantity = parseInt(productBlock.querySelector('.product__quantity-value').innerText);

    const newImage = document.createElement('img');
    newImage.classList.add('cart__product-image');
    newImage.src = image.src;
    newImage.alt = image.alt;

    const newDiv = document.createElement('div');
    newDiv.classList.add('cart__product-count');
    newDiv.innerText = productQuantity;

    const newRemoveButton = document.createElement('a');
    newRemoveButton.classList.add('cart__product-remove');
    newRemoveButton.href = '#';
    newRemoveButton.innerText = 'Удалить';
    newRemoveButton.addEventListener('click', deleteCartElement);

    const newElement = document.createElement('div');
    newElement.classList.add('cart__product');
    newElement.dataset.id = productId;
    newElement.appendChild(newImage);
    newElement.appendChild(newDiv);
    newElement.appendChild(newRemoveButton);

    return newElement;
}

const drawTrace = (senderBlock, recieverBlock) => {
    const senderRect = senderBlock.getBoundingClientRect();
    const recieverRect = recieverBlock.getBoundingClientRect();

    const senderTop = senderRect.top;
    const senderLeft = senderRect.left;

    const recieverTop = recieverRect.top;
    const recieverLeft = recieverRect.left;

    const iterations = 10;
    const speed = 50;
    const deltaTop = (recieverTop - senderTop) / iterations;
    const deltaLeft = (recieverLeft - senderLeft) / iterations;

    const clonedSender = senderBlock.cloneNode();    

    let i = 0;
    const f = (senderTop, senderLeft, deltaTop, deltaLeft, iterations) => {

        i++;        
        clonedSender.style.position = 'absolute';
        clonedSender.style.top = `${senderTop + deltaTop*i}px`;
        clonedSender.style.left = `${senderLeft + deltaLeft*i}px`;
        if (clonedSender.parentElement === null) {
            cartProductsBlock.appendChild(clonedSender);
        }

        if (i === iterations - 1) {
            cartProductsBlock.removeChild(clonedSender);
            return;
        } else {
            setTimeout(f, speed, senderTop, senderLeft, deltaTop, deltaLeft, iterations);
        }
        
    };

    setTimeout(f, speed, senderTop, senderLeft, deltaTop, deltaLeft, iterations);
}

// button handlers
[...controls].forEach(i => {
    i.addEventListener('click', e => {
        let delta;
        if (e.target.matches('.product__quantity-control_inc')) {
            delta = 1;
        } else if (e.target.matches('.product__quantity-control_dec')) {
            delta = -1;
        }

        if (delta) {
            const div = e.target.parentElement.querySelector('.product__quantity-value');
            let quantity = parseInt(div.innerText);

            quantity += delta;
            if (quantity < 0) { quantity = 0 };
            div.innerText = quantity;
        }
    });

});

[...addToBasket].forEach(i => {
    i.addEventListener('click', e => {        
        const productBlock = e.target.closest('div.product');
        const productId = productBlock.dataset.id;
        const productQuantity = parseInt(productBlock.querySelector('.product__quantity-value').innerText);

        if (productQuantity <= 0) return;

        const cartProducts = [...cartProductsBlock.querySelectorAll('.cart__product')];
        if (cartProducts.length) {
            const cartProductBlock = cartProducts.find(i => i.dataset.id === productId);
            if (cartProductBlock) {
                const quantityBlock = cartProductBlock.querySelector('.cart__product-count');
                let quantity = parseInt(quantityBlock.innerText);
                quantity += productQuantity;
                quantityBlock.innerText = quantity;

                drawTrace(productBlock.querySelector('img'), cartProductBlock.querySelector('img'));

                return;
            }
        }

        const newElement = createCartElement(productBlock);
        cartProductsBlock.appendChild(newElement);

        if (cartBlock.classList.contains('visually-hidden')) {
            cartBlock.classList.remove('visually-hidden');
        }

        drawTrace(productBlock.querySelector('img'), newElement.querySelector('img'));
    });
});

