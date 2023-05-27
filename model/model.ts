export const model = {
  currentCar: null,
  cars: [
    {
      clickCount: 0,
      name: 'Coupe Maserati',
      imgSrc:
        'https://maserati.scene7.com/is/image/maserati/maserati/international/Models/granturismo/granturismo-gt/gt/performance/GT-Toggle-1.jpg?wid=4000&hei=1920&fmt=jpg&qlt=80,0&resMode=sharp2&op_usm=0.3,0.3,2,1&fit=vfit,1&fit=constrain',
      alt: 'coupe masserati picture',
    },
    {
      clickCount: 0,
      name: 'Camaro SL1',
      imgSrc:
        'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/09/2018-Chevrolet-Camaro-ZL1-1LE-103.jpg?crop=0.897xw:0.824xh;0.0505xw,0.130xh&resize=2048:*',
      alt: 'camaro sl1 picture',
    },
    {
      clickCount: 0,
      name: 'Dodger',
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dodge_Challenger_SRT8_%282015%29_IMG_3958.jpg/280px-Dodge_Challenger_SRT8_%282015%29_IMG_3958.jpg',
      alt: 'dodger picture',
    },
    {
      clickCount: 0,
      name: 'Ford Mustang',
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/2018_Ford_Mustang_GT_5.0.jpg/280px-2018_Ford_Mustang_GT_5.0.jpg',
      alt: 'ford mustang picture',
    },
  ],
};

export type Car = {
  clickCount: number;
  name: string;
  imgSrc: string;
};
