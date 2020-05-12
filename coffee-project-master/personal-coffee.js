"use strict"

function renderCoffee(coffee){
    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
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
    e.preventDefault();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        var selectedRoast = roastSelection.value;
        var selectedName = coffeeSelection.value;
        var coffeeName = coffee.name;
       if (selectedRoast === "all") {
           selectedRoast = coffee.roast;

       if (selectedName.length < 1){
           selectedName = coffeeName;
       }
           filteredCoffees.push(coffee);
       }
    });
    CoffeeDiv.innerHTML = renderCoffees(filteredCoffees);
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

var CoffeeDiv = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSelection = document.querySelector('#coffeeSearch')
var defaultRoast = document.querySelector('#default');

CoffeeDiv.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);