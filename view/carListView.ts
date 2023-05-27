import { controller } from '../controller/controller';
import { carView, Car } from '../view/carView';

export const carListView = {
  init() {
    // store the DOM element for easy access later
    this.carListElem = document.getElementById('car-list');

    // render this view (update the DOM elements with the right values)
    this.render();
  },

  render() {
    let car: Car;
    let elem : HTMLElement;
    let i;
    // get the cars to be render from the controller
    const cars = controller.getCars();

    // to make sure the list is empty before rendering
    this.carListElem.innerHTML = '';

    // loop over the cars array
    for (let i = 0; i < cars.length; i++) {
      // this is the car we've currently looping over
      car = cars[i];

      // make a new car list item and set its text
      elem = document.createElement('li');
      elem.className =
        'list-group-item d-flex justify-content-between lh-condensed';
      elem.style.cursor = 'pointer';
      elem.textContent = car.name;
      elem.addEventListener(
        'click',
        (function (carCopy) {
          return function () {
            controller.setCurrentCar(carCopy);
            carView.render();
          };
        })(car)
      );
      // finally, add the element to the list
      this.carListElem.appendChild(elem);
    }
  },
};
