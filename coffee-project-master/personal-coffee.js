"use strict"

function renderCoffee(coffee){
    var html = '<div class="coffee">';
    html += '<h1 class="coffee-title">' + coffee.name + '</h1>';
    html += '<p class="coffee-roast">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length -1; i >= 0; i--){
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    // console.log(e);
    e.preventDefault();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        var selectedRoast = roastSelection.value;
        var selectedName = nameSelection.value.toUpperCase();
        var coffeeName = coffee.name.toUpperCase();
       if (selectedRoast === "all")
           // console.log("all");
           selectedRoast = coffee.roast;


       if (selectedName.length < 1){
           selectedName = coffeeName; // Post all coffee names an individual coffee name would be indicated with coffee[i].name

       }

       if(coffee.roast === selectedRoast && coffeeName.indexOf(selectedName) != -1){
           filteredCoffees.push(coffee);
           // console.log(coffee);
       }

    });
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(){
    var addedRoast = roastAddition.value;
    var addedCoffee = nameAddition.value.toLowerCase();

    addedCoffee = addedCoffee.split(" ");
    // console.log(addedCoffee);

    addedCoffee.forEach(function(name, index) {
       addedCoffee[index] = name.replace(name.substring(0, 1), name.substring(0, 1).toUpperCase());
       // console.log(addedCoffee);
    });
    addedCoffee = addedCoffee.join(" ");

    var coffeeObject = {id: coffees.length + 1, name: addedCoffee, roast: addedRoast};
    coffees.push(coffeeObject);
    coffeeDiv.innerHTML = renderCoffees(coffees);
}

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var coffeeDiv = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#coffeeSearch')
var addButton = document.querySelector('#add-btn');
var roastAddition = document.querySelector('#roast-addition');
var nameAddition = document.querySelector('#coffee-addition');
var defaultRoast = document.querySelector('#default');

coffeeDiv.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);
nameSelection.addEventListener('input', updateCoffees);
submitButton.addEventListener('click', updateCoffees);
addButton.addEventListener('click', addCoffee);