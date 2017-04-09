const notes = ( state = [], action ) => {
  switch (action.type) {
    case 'NOTES':
      return action.notes;
    case 'ADD_NOTE':
      return [ action.note, ...state ]
    case 'UPDATE_NOTE':
      return state.map( note => {
        if (note._id === action.note._id)
          return action.note
        return note;
      })
    case 'DELETE_NOTE':
      return state.filter( n => n._id !== action.id)
    default:
      return state;
  }
}

export default notes;
