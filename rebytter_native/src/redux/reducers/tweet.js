import { ActionConst } from 'react-native-router-flux';

const defaultState = {
  contents: ''
};

export default function reducer(state = defaultState , action){
  switch(action.type){
    case 'ADD':
      return Object.assign({} , state , {
        contents: action.contents
      });
    default:
      return state;
  }
}

