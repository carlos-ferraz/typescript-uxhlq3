export const model = {
  currentCar: null,
  cars: [
    {
      clickCount: 0,
      name: 'Coupe Maserati',
      imgSrc: 'images/coupe-masserati.jpg',
      alt: 'coupe masserati picture',
    },
    {
      clickCount: 0,
      name: 'Camaro SL1',
      imgSrc: '/assets/images/camaro-ssl11.png',
      alt: 'camaro sl1 picture',
    },
    {
      clickCount: 0,
      name: 'Dodger',
      imgSrc: '/assets/images/dodger.jpg',
      alt: 'dodger picture',
    },
    {
      clickCount: 0,
      name: 'Ford Mustang',
      imgSrc: '/assets/images/ford-mustang.jpg',
      alt: 'ford mustang picture',
    },
  ],
};

export type Car = {
  clickCount: number;
  name: string;
  imgSrc: string;
};
