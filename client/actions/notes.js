import { setFlash } from './flash';

export const getNotes = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/notes',
      type: 'GET'
    }).done( notes => {
      dispatch({ type: 'NOTES', notes })
    });
  }
}

export const addNote = (title, body) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/notes',
      type: 'POST',
      data: { title, body }
    }).done( note => {
      dispatch({ type: 'ADD_NOTE', note })
      dispatch(setFlash('Note Added', 'success'));
    }).fail( err => {
      let errors = err.responseJSON.errors
      let messages = Object.keys(errors)
      .map( key => { return(`${key} ${errors[key].kind}`) })
      .join(',')
      dispatch(setFlash(messages, 'error'))
    });
  }
}

export const updateNote = (id, title, body) =>  {
  return (dispatch) => {
    $.ajax({
      url: `/api/notes/${id}`,
      type: 'PUT',
      data: { title, body }
    }).done( note => {
      dispatch({ type: 'UPDATE_NOTE', note });
    });
  }
}

export const deleteNote = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/notes/${id}`,
      type: 'DELETE'
    }).done( () => {
      dispatch({ type: 'DELETE_NOTE', id });
      dispatch(setFlash('Note Deleted', 'success'))
    });
  }
}






{/*const addNote
const updateNote
const deleteNote */}
