const chairs = Array.from({length: 24}, (_, i) => ({
    id: i + 1,
    name : i + 1,
    reserved: false,
}));

let cart = {
    items : [],
};


const renderchairs = () => {
    const productDiv = document.querySelector('.row')
    productDiv.innerHTML = "";

    chairs.forEach((item, index) => {
        productDiv.innerHTML +=
        `
        <div class="col bg-light p-3 text-center">
            <button onclick="addToCart(${index})">${item.name}</button>
        </div>
        `;
    });
};

const renderCartItems = () => {
    const CartDiv = document.querySelector(".show-ticket")
    CartDiv.innerHTML = "";

    if(cart.items.length === 0){
        CartDiv.innerHTML ='صندلی خریداری نشده'
        return;
    }

    cart.items.forEach((item) => {
        CartDiv.innerHTML +=
        `
        <div class="delete">
            <div class="clo-3 bg-light p-3 text-center">
                <button onclick="removeFromCart('${item.name}')">حذف صندلی ${item.id}</button>
            </div>
        </div>
        `;
    });
};

const addToCart = (productIndex) => {
    const product = chairs[productIndex]


    let existingProduct  = false

    let newCartItems = cart.items.reduce((state, item) => {
        if (item.name === product.name){
            existingProduct = true

            const newItem = {
                ...item
            }
            return [...state, newItem]
        }
        return [...state, item]
    }, [])
    if(!existingProduct){
        newCartItems.push({
            ...product,
            name : 1,
        })
    }
    cart ={
        ...cart,
        items: newCartItems,
    }
    alert('خرید صندلی');
    renderCartItems()
}

const removeFromCart = (productName) => {
    let newCartItems = cart.items.reduce((state, item) =>{
        if (item.name = productName){
            const newItem ={
                ...item,
                name: item.id -1,
            }
            if (newItem.id = 0){
                return[...state, newItem]
            } else{
                return state
            }
        }
        return[...state, item]
    },[])
    cart = {
        ...cart,
        items: newCartItems,
    }
    alert('حذف صندلی');
    renderCartItems()
}

renderchairs()
renderCartItems()