import { ADD_NOTE,DELETE_NOTE } from "../actions/nodeActions";

const INITIAL_STATE =  {
   notes : [ 
              {
                 text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam',
                  CreatedOn : new Date()},
              {  text: 'Aliquam erat volutpat. Ut tincidunt, velit vel aliquam commodo, tellus urna auctor tortor, non ultrices libero ante sed magna.',
                 CreatedOn : new Date() } ]
};
  export function noteReducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case ADD_NOTE:
                return{
                         ...state,
                   notes:[
                         ...state.notes,
                        { 
                           text : action.text ,
                           CreatedOn : new Date()
                         }
                   ]
            }
          
            case DELETE_NOTE:
              state.notes.splice(action.index, 1); 
     //i have doubt in this contest
                    return{
                            ...state,
                            notes : [...state.notes],
                        }
        default:
            return state;
    }
  }