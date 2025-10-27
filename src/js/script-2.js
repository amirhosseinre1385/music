const chairs = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: i + 1,
    reserved: false,
}));

let cart = {
    items: [],
};

// رندر کردن صندلی‌ها
const renderChairs = () => {
    const productDiv = document.querySelector(".row");
    productDiv.innerHTML = "";

    chairs.forEach((item, index) => {
       productDiv.innerHTML +=
       `
        <div class="col bg-light p-3 text-center">
        <button class="btn ${item.reserved ? 'btn-secondary' : 'btn-primary'}"onclick="addToCart(${index})" ${item.reserved ? 'disabled' : ''}>
            ${item.name}
        </button>
        </div>
        `;
    });
};

const renderCartItems = () => {
    const cartDiv = document.querySelector(".show-ticket");
    cartDiv.innerHTML = "";

    if (cart.items.length === 0) {
    cartDiv.innerHTML = "صندلی خریداری نشده";
    return;
    }

    cart.items.forEach((item) => {
    cartDiv.innerHTML +=
    `
    <div class="col-2 bg-light p-3 text-center">
        <button class="btn btn-danger" onclick="removeFromCart(${item.id})">
            حذف صندلی ${item.name}
        </button>
    </div>
    `;
    });
};

// افزودن صندلی به سبد خرید
const addToCart = (productIndex) => {
    const product = chairs[productIndex];

    if (product.reserved) {
    alert("این صندلی قبلاً خریداری شده است!");
    return;
    }

    product.reserved = true;
    cart.items.push(product);

    alert(`صندلی ${product.name} با موفقیت خریداری شد`);
    renderChairs();
    renderCartItems();
};

const removeFromCart = (productId) => {
    cart.items = cart.items.filter((item) => item.id !== productId);

    const chair = chairs.find((c) => c.id === productId);
    if (chair) chair.reserved = false;

    alert(`صندلی ${productId} حذف شد`);
    renderChairs();
    renderCartItems();
};

// اجرای اولیه
renderChairs();
renderCartItems();