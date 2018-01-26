//business logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  if (this.size === 'small') {var price = 8;
  } else if (this.size === 'medium') {var price = 10;
  } else {var price = 12;}
  price += this.toppings.length;
  return price;
}

  totalCost = 0;

// user interface logic
$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var size = "";
    $("input:radio[name=size]:checked").each(function(){
      size = $(this).val();
    });
    var toppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var aTopping = $(this).val();
      toppings.push(aTopping);
    });
    if (toppings.length === 0) {
      alert ("Please choose at least one topping!");
    }  else {
      var newPizza = new Pizza(size, toppings);
      totalCost += newPizza.price();
      var pizzaHtml = "<li><span class='pizza'>" + size
      newPizza.toppings.forEach(function(topping) {pizzaHtml += (" "+topping)});
      $("ol#pizzas").append(pizzaHtml + " pizza - $"+newPizza.price()+"</span></li>");
      $("h4#totalCost").text("Total Cost: $" + parseInt(totalCost))

      $('input[type=checkbox]').each(function() {
        if (this.value === 'cheese') {
          this.checked = true;
        } else {
          this.checked = false;
        };
      });
      $('input[type=radio]').each(function() {
        if (this.value === 'small') {
          this.checked = true;
        } else {
          this.checked = false;
        };
      });
    };
  });
});
