export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_MEMBER':
      return state.concat([action.value])
  	case 'REQUEST_LOGIN':
      return authenticateUser(state,action.value )
    default:
      return state
  }
}

function authenticateUser (state,data) {
		 // return state.map(object=>{
		 // if (object.name === data.name) {
			// return  data;
		 // }
		
		// });
		for (var i=0;i< state.length;i++) {
			if (state[i].name === data.name) {
				state[i] =  data;
			}
		
		}
		return state;
}