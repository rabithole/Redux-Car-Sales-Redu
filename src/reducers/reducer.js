// import { buyItem, removeFeature } from '../actions/actions';

const initialState = 
{
    additionalPrice: 0,
    car: {
      price: 56395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export function reducer(state = initialState, action) { // Action === dispatch
  switch (action.type) { // Action is an object, it is passed through reducer to dispatch in the App.js file. 
    case 'ADD_FEATURE':
      // console.log(state.car.features);
      // console.log(action.payload);
      // console.log(state.additionalFeatures)
      return {
        additionalPrice: state.car.features.price,
        car: {
          ...state.car,
          price: state.car.price + action.payload.price,
          features: [...state.car.features, action.payload]
        },
        additionalFeatures: state.additionalFeatures
      }

      case 'REMOVE_FEATURE':
      // console.log('REMOVE FEATURE REDUCER!!!')
      // console.log(state.car.features)
      // console.log(action.payload)
       return {
            // additionalPrice: state.car.features.price,
            car: {
              ...state.car,
              price: state.car.price - action.payload.price,
              features: state.car.features.filter(item => 
                item.id !== action.payload.id)
              },
            additionalFeatures: state.additionalFeatures
          };
         
    default:
      return state;
  }
}
// Don't need to use the spread because map makes a new array. 

// action is and object that contains dispatch with a type and payload key value pairs. 