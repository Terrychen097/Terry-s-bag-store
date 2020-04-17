/** Add any JavaScript you need to this file. */
function insertitems(load) {
    load.forEach(products => {
        var div = document.getElementById("productloader");
        div.innerHTML =
            div.innerHTML +
            `
   <div class="product-card">
            <div class="product-pic">
                <img ${products.img}/>
          </div>
            <div class="product-details">
                <span class="product-catagory">${products.tags}</span>
                <h4 class="card-title">${products.name}</h4>
                <p class="card-text">
                    ${products.description}
                </p>
                <div class="product-bottom-details">
                    <div class="product-price">
                       $ ${products.price}
                    </div>
                </div>
            </div>
        </div>


  `;
    });
}

// List
function cleareverything() {
    var kill = document.getElementById("productloader");
    kill.innerHTML = " ";

    //sort by tags function
}
function sort(category) {
    let Table = document.getElementById("productloader");
    Table.innerHTML = "";

    let arr = [];
    /*eslint no-undef:0*/
    //suppressing because they are defined in another javascript file
    for (var i = 0; i < products.length; i++) {
        if (products[i].tags === category)
            arr.unshift(products[i]);
    }
    insertitems(arr);

    //using an if statement to see if the object is null so
    //incase we are on a different page. it wont block the other event listeners
}

if (document.getElementById("all") !== null) {
    document.getElementById("all").addEventListener("click", function() {
        cleareverything();
        insertitems(products);
    });
//sorts by bowties
    document.getElementById("men").addEventListener("click", function() {
        cleareverything();
        sort("Men");

        //sorts by tags that match leash
    });
    document.getElementById("women").addEventListener("click", function() {
        cleareverything();
        sort("Women");

        //sorts by shirt
    });
}