$(document).ready(function(){
    var catalog = {}

    $.get (
        'https://codi-e-commerce.herokuapp.com/',
        'false',
        retour,
        'json'
    );
    function retour (x){
        catalog  = x;
        var index = GET_PARAM("index")
        var produit = catalog[index]
        $("h2").html(catalog[index].name);
        $("#prix").html(catalog[index].price);
        $("#description").html(catalog[index].description);
        $("img").attr('src', catalog[index].thumb)

        var count = 0;
        $("#ajoutpanier").click(function(){
            var panier_json = localStorage.getItem("objet");
            var panier = JSON.parse(panier_json);
            if(panier === undefined){
                var panier = {};
            }
            count ++;
            panier[index]=count
            console.log(panier);

            var panier_json = JSON.stringify(panier);
            localStorage.setItem("objet",panier_json);
            var panier_json = localStorage.getItem("objet");
            var panier = JSON.parse(panier_json);
        })
    }

})
