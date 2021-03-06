let fetchProducts = (done) => {
    $.get('/api/products', (data) => {
        done(data);
    });
}

let createProducts = (product) => {
    return $(`
    <div class="card m-3" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title product-name">${product.name}</h5>
        <h6 class="card-text product-manuafacturer">${product.manuafacturer}</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div class="row">
            <div class="col m-3 p-1" style="text-align: center; 
            background-color: antiquewhite; padding: 3px;"> <h6>Price: Rs: ${product.price}/-</h6> </div>
            <a href="#" class="btn btn-primary">Buy Now!</a>
        </div>
        </div>
    </div>
    `);
};

let addProduct = (name, manuafacturer, price, done) => {
    $.post('/api/products', {
        name: name,
        price: price,
        manuafacturer: manuafacturer
    }, (data) => {
        done(data);
    });
};

$(() => {
    
    let productList = $('#product-list'); 
    let addProductBtn = $('#addProductBtn');
    
    fetchProducts(function(products){
        productList.empty();
        for(product of products){
            productList.append(createProducts(product));
        }
    });

    let product_name = $('#product_name');
    let product_manuafacturer = $('#product_manuafacturer');
    let product_price = $('#product_price');

    addProductBtn.click(function(){
        addProduct(product_name.val(), product_manuafacturer.val(), product_price.val(), function(added){
            window.alert("Added " + added.name + " Successfully!");
            console.log("added");
        });
    });
});