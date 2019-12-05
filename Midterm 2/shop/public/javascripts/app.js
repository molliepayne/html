/*global axios */
/*global Vue */
var app = new Vue({
    el: '#app',
    data: {
        products: [],
        newProdName: "",
        newProdPrice: "",
        newProdPicURL: "",
        shoppingCart: [], //checkboxes - adds string of checkbox value as it's check - keeps track of who they want to purchase
        purchased: false,
        purchases: [], //holds what they purchased for to display
    },

    created: function() {
        this.getProducts();
    },

    methods: {
        makePurchase() {
            //reset the list that is currently being purchased 
            this.purchases = [];

            //for each product that is checked (shoppingCart) call the purchase route
            for (let i = 0; i < this.shoppingCart.length; i++) {
                var url = "http://foothillfarmflowers.com:4200/products/" + this.shoppingCart[i] + "/purchase";
                //console.log("URL " + url);
                axios.put(url)
                    .then(response => {
                        //add to the iist to display of who they purchased for
                        this.purchases.push(response.data);
                        //boolean to show submitted ballot
                        this.purchased = true;
                    })
                    .catch(e => {
                        console.log(e);
                    });

            }
            //reset shopping checkboxes
            this.shoppingCart = [];

        },

        async addProduct() {
            //console.log("in add product");
            var url = "http://foothillfarmflowers.com:4200/products";
            //call post route to add new product - get name from inputboxes, purchases will be set to 0 automatically
            axios.post(url, {
                    name: this.newProdName,
                    price: this.newProdPrice,
                    URL: this.newProdPicURL
                    //purchases: 0 defaulted in schema - so no need to add it here.
                })
                .then(response => {

                    this.newProdName = "";
                    this.newProdPriceName = "";
                    this.newProdPicURL = "";
                    //console.log("Post Response "); 
                    //console.log(response.data);
                    this.products.push(response.data);
                    this.getProducts();
                })
                .catch(e => {
                    console.log(e);
                });

        },

        async deleteProduct(product) {
            //console.log("in delete product");
            var url = "http://foothillfarmflowers.com:4200/products/";
            axios.delete(url + product._id)
                .then(response => {
                    //console.log("deleted " + product.first_name);

                    this.getProducts();

                })
                .catch(e => {
                    console.log(e);
                });

        },

        async getProducts() {
            //console.log("get products");
            var url = "http://foothillfarmflowers.com:4200/products"; // This is the route we set up in index.js
            try {
                let response = await axios.get(url);
                this.products = response.data; // Assign array to returned response
                
                //console.log(this.products);
                return true;
            }
            catch (error) {
                console.log(error);
            }
        }
    }
});
