import {
 SET_VISIBILITY_FILTER
} from '../actions/types';



const initialState = {
  filters: null,
  products:[
    {name: "Пиво Жигули світле", discription: "фільтроване 6% 033л", categories: ['beer', 'classic']},
    {name: "Пиво Backs", discription: "нефільтроване 5% 0.6л", categories: ['beer', 'light']},
    {name: "Пиво Duck світле", discription: "фільтроване 6% 0.5л", categories: ['beer', 'classic', 'light']},
    {name: "Пиво Гребуча Корова Світле", discription: "нефільтроване 5% 0.6л", categories: ['beer', 'classic']},
    {name: "Пиво Жигули світле", discription: "фільтроване 6% 033л", categories: ['beer', 'classic']},
    {name: "Пиво Backs", discription: "нефільтроване 5% 0.6л", categories: ['beer', 'light']},
    {name: "Пиво Duck світле", discription: "фільтроване 6% 0.5л", categories: ['beer', 'classic', 'light']},
    {name: "Пиво Гребуча Корова Світле", discription: "нефільтроване 5% 0.6л", categories: ['beer', 'classic']},  {name: "Пиво Жигули світле", discription: "фільтроване 6% 033л", categories: ['beer', 'classic']},
    {name: "Пиво Backs", discription: "нефільтроване 5% 0.6л", categories: ['beer', 'light']},
    {name: "Пиво Duck світле", discription: "фільтроване 6% 0.5л", categories: ['beer', 'classic', 'light']},
    {name: "Пиво Гребуча Корова Світле", discription: "нефільтроване 5% 0.6л", categories: ['beer', 'classic']}
  ]
};

export default function Reduser(state = initialState, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER: return { ...state, filters: action.filters };
    default: return state;
  }

};
