"use strict";

//Класс, объекты которого описывают параметры гамбургера.
class Hamburger {
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  addTopping(topping) {
    if (!this._toppings.includes(topping)) {
      this._toppings.push(topping);
    }
  }

  removeTopping(topping) {
    this._toppings = this._toppings.filter(el => {
      return el !== topping;
    });
  }

  get toppings() {
    return this._toppings;
  }

  get size() {
    return this._size;
  }

  get stuffing() {
    return this._stuffing;
  }

  calculatePrice() {
    const sizePrice = Hamburger.SIZES[this.size].price;
    const stuffingPrice = Hamburger.STUFFINGS[this.stuffing].price;
    const toppingPrice = this._toppings.reduce((acc, value) => {
      return acc + Hamburger.TOPPINGS[value].price;
    }, 0);

    const totalPrice = sizePrice + stuffingPrice + toppingPrice;
    return totalPrice;
  }

  calculateCalories() {
    const sizeCalories = Hamburger.SIZES[this.size].calories;
    const stuffingCalories = Hamburger.STUFFINGS[this.stuffing].calories;
    const toppingCalories = this._toppings.reduce((acc, value) => {
      return acc + Hamburger.TOPPINGS[value].calories;
    }, 0);

    const totalCalories = sizeCalories + stuffingCalories + toppingCalories;
    return totalCalories;
  }
}

Hamburger.SIZE_SMALL = "SIZE_SMALL";
Hamburger.SIZE_LARGE = "SIZE_LARGE";

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100
  }
};

Hamburger.STUFFING_CHEESE = "STUFFING_CHEESE";
Hamburger.STUFFING_SALAD = "STUFFING_SALAD";
Hamburger.STUFFING_MEAT = "STUFFING_MEAT";

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15
  }
};

Hamburger.TOPPING_SPICE = "TOPPING_SPICE";
Hamburger.TOPPING_SAUCE = "TOPPING_SAUCE";

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5
  }
};

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log(hamburger.toppings);
// console.log(hamburger.stuffing);

console.log(hamburger);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log(hamburger.toppings);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log(hamburger.toppings);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.toppings.length); // 1
