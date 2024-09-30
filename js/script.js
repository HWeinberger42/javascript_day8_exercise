const presentFlowers = () => {
    let presenter = document.getElementById("articlesPresentation");
    presenter.innerHTML = ``;
    flowers.forEach((flo, index) => {
        presenter.innerHTML += `
            <div class="card h-100">
                <img src="img/${flo.image}" class="card-img-top object-fit-cover" alt="${flo.name}">
                <div class="card-body">
                    <h5 class="card-title">${flo.name}</h5>
                    <p class="card-text">€ ${flo.price.toFixed(2)}</p>
                    <button class="btn btn-primary btnAddToCart ${flo.id}">Add to cart</button>
                </div>
            </div>   
        `;
    });
};

presentFlowers();

let cart = [];

let addToCartBtns = document.querySelectorAll(".btnAddToCart");

console.log(addToCartBtns);

addToCartBtns.forEach((addToCartBtn) => {
    
    addToCartBtn.addEventListener('click', function() {
        console.log(addToCartBtn);
        let classId = addToCartBtn.classList[3];
        console.log(classId);

        let floindex = -1;
        for (let index = 0; index < flowers.length; index++) {
            const element = flowers[index];
            if(element.id == classId) {
                console.log(index);
                floindex = index;
            }
        }

        //searchElement of .indexOf() can't be a callback function like with .find()
        // let floindex = flowers.indexOf((element) => {return element.id == classId;});
         
        console.log(floindex);
        let flowi = flowers[floindex];
        console.log(flowi);
        cart.push(flowi);
        console.log(cart);
    });
});

// const addToCart = (flower) => {

// };

