let xhr  	 	= new XMLHttpRequest();
let info;
let foodPairing;

xhr.open('GET', 'https://api.punkapi.com/v2/beers?page=2&per_page=21', true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function() {
    if (xhr.status === 200) {
        info = JSON.parse(this.responseText);
        console.log(info);
        display(0);
    }//end if status === 200
}//end function

function display(x) {
    console.log(x);
    document.getElementById('name').innerHTML = info[x].name;
    document.getElementById('abv').innerHTML = "ABV: " + info[x].abv + "%";
    document.getElementById('tagline').innerHTML = info[x].tagline;
    document.getElementById('img').src = info[x].image_url;
    document.getElementById('brewed').innerHTML = "Created: " + info[x].first_brewed;
    document.getElementById('description').innerHTML = info[x].description;

    foodPairing = "";
    for (i = 0; i < info[x].food_pairing.length; i++) {
        console.log(info[x].food_pairing[i]);
        foodPairing += "<p>" + info[x].food_pairing[i] + "</p>";
    }//end loop

    document.getElementById('foodPairing').innerHTML = foodPairing;


}//end function

/* 
ATT GÖRA!

Flytta ABV och IBU under infotexten, lägg även till bottle volume.

Centrera namnet ovanför flaskan genom grid-column span.

Lägg in färger, inspiration från https://github.com/PMGH/js_brewdog_beers/blob/master/screenshots/brewdogBeers.png
*/