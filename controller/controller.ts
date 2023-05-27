import { model } from '../model/model';
import { carListView } from '../view/carListView';
import { carView } from '../view/carView';

export const controller = {
  init() {
    // set the current car to the first one in the list
    model.currentCar = model.cars[0];

    // tell the views to initialize
    carListView.init();
    carView.init();
  },

  getCurrentCar() {
    return model.currentCar;
  },

  getCars() {
    return model.cars;
  },

  // set the currently selected car to the object that's passed in
  setCurrentCar(car) {
    model.currentCar = car;
  },

  // increment the counter for the currently-selected car
  incrementCounter() {
    model.currentCar.clickCount++;
    carView.render();
  },
};
