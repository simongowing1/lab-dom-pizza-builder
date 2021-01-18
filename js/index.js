// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
if (state.mushrooms) {
  oneMushroom.style.visibility = 'visible';
} else {
  oneMushroom.style.visibility = 'hidden';
}
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
      });
    }

function renderWhiteSauce() {
      // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
      document.querySelectorAll('.sauce').forEach(function (sauce) {
        if (state.whiteSauce) {
        sauce.classList.add('sauce-white');
        } else {
        sauce.classList.remove('sauce-white');
        }
      });
    }   


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    document.querySelectorAll('.crust').forEach(function (crust) {
      if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free');
      } else {
      crust.classList.remove('crust-gluten-free');
      }
    });
  }

function renderButtons() {

  document.querySelectorAll('.btn-pepperoni').forEach(button => {
    if (state.pepperoni) {
      button.classList.add('active');
    } else {
      button.classList.remove('active')
    }
  });
  
  document.querySelectorAll('.btn-mushrooms').forEach(button => {
    if (state.mushrooms) {
      button.classList.add('active');
    } else {
      button.classList.remove('active')
    }
  });
  
  document.querySelectorAll('.btn-green-peppers').forEach(button => {
    if (state.greenPeppers) {
      button.classList.add('active');
    } else {
      button.classList.remove('active')
    }
  });
  
  document.querySelectorAll('.btn-sauce').forEach(button => {
    if (state.whiteSauce) {
      button.classList.remove('active');
    } else {
      button.classList.add('active')
    }
  });
  
  document.querySelectorAll('.btn-crust').forEach(button => {
    if (state.glutenFreeCrust) {
      button.classList.remove('active');
    } else {
      button.classList.add('active')
    }
  });

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
 // let activeButton = document.getElementByClass('btn');
//activeButton.classList.toggle('active')
//  return activeButton

 // document.querySelectorAll('.btn').forEach(function (button){
  //  if (state.value === true) {
  //    button.classList.remove('active');
  //    } else {
  //    button.classList.add('active')};
  //});

//document.getElementsByClassName('.btn').forEach (function (button){
//  button.onclick = function (event){
//    event.target.classList.toggle('active')
//  }
//});

//const buttonType = document.querySelectorAll('.btn').className;

}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceList = document.querySelectorAll('.panel price ul');
  
  document.querySelectorAll('.panel price ul').forEach(topping => {
    if (state.pepperoni) {
      const newTopping = document.createElement ('li');
      newTopping.innerText = '$1 pepperoni';
      

    } else {
      topping.classList.remove('active')
    }
  });

}


// renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
