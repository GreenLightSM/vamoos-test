//Encapsulation is used for preventing of direct manipulation with some property
// In JavaScript encapsulation can be implemented via class or function closures

// Example with class

class Car {
  #color = 'red' // hashtag means that field is private

  getColor() {
    return this.#color
  }

  setColor(color) {
    this.#color = color
  }
}

const car = new Car()

car.color // undefined
car.getColor() // red
car.setColor('blue') // color is set to blue
car.getColor() // blue

// Example with closures

function createCar() {
  let color = 'red'

  return {
    getColor() {
      return color
    },
    setColor(newColor) {
      color = newColor
    },
  }
}

const carFunc = createCar()

carFunc.color // undefined
carFunc.getColor() // red
carFunc.setColor('blue') // color set to blue
carFunc.getColor() // blue
