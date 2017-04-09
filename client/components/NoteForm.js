import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';

const NoteForm = ({ dispatch }) => {
  let title;
  let body;
  let form;

  return (
    <div>
      <h5 className="center">Add A Note</h5>
      <form
        ref={ n => form = n }
        onSubmit={ e => {
          e.preventDefault();
          dispatch(addNote(title.value, body.value));
          form.reset();
        }}
      >
        <input ref={ n => title = n } placeholder="Title" />
        <textarea ref={ n => body = n } placeholder="Note Body" />
        <button className="btn">Save</button>
      </form>
    </div>
  )
}

export default connect()(NoteForm);






