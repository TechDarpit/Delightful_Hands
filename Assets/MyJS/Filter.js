delightfulHands.filter("categoryFilter",function(){
    return function(products,CatogeryType){
        if(CatogeryType == "All Catogery"){
            return products;
        }
        return products.filter(function(product){
            var keyword = new RegExp(CatogeryType,'i');           
            return keyword.test(product.P_Category);
        });
    };
});

delightfulHands.filter("searchFilter",function(){
    return function(products,SearchText){
        if(!SearchText){
            return products;
        }
        return products.filter(function(product){
            var keyword = new RegExp(SearchText,'i');           
            return keyword.test(product.P_Name);
        });
    };
});