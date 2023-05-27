import { controller } from '../controller/controller';

export const carView = {
  init() {
    // store pointers to the DOM elements for easy access later
    this.carElem = document.getElementById('car');
    this.carNameElem = document.getElementById('car-name');
    this.carImageElem = document.getElementById('car-image');
    this.countElem = document.getElementById('car-count');
    this.elCount = document.getElementById('elCount');

    // on click, increment the current car's counter
    this.carImageElem.addEventListener('click', this.handleClick);

    // render this view (update the D/OM elements with the right values)
    this.render();
  },

  handleClick() {
    return controller.incrementCounter();
  },

  render() {
    // update the DOM elements with values from the current car
    const currentCar = controller.getCurrentCar();
    this.countElem.textContent = currentCar.clickCount;
    this.carNameElem.textContent = currentCar.name;
    this.carImageElem.src = currentCar.imgSrc;
    this.carImageElem.alt = currentCar.alt;
    this.carImageElem.style.cursor = 'pointer';
  },
};
