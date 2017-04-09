import React from 'react';
import { connect } from 'react-redux';
import { updateNote, deleteNote } from '../actions/notes';

class Note extends React.Component {
  state = { edit: false }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  deleteNote = () => {
    let { dispatch, note, router } = this.props;
    dispatch(deleteNote(note._id))
    router.push('/');
  }

  update = (e) => {
    e.preventDefault();
    let { form, title, body, props: { dispatch, note: { _id }}} = this;
    dispatch(updateNote(_id, title.value, body.value));
    this.toggleEdit();
  }

  edit = () => {
    let { note: { _id, title, body }} = this.props;
    return (
      <div className="container">
        <div className="center">
          <form ref={ n => this.form = n } onSubmit={this.update}>
            <input ref={ n => this.title = n } defaultValue={title} />
            <textarea ref={ n => this.body = n } defaultValue={body}></textarea>
            <div className="row">
              <button 
                type="button" 
                onClick={this.toggleEdit} 
                className="btn grey col m3"
              >
                Cancel
              </button>
              <button className="btn col m3">Save</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  show() {
    if ( this.props.note ) {
      let { note: { title, body, updatedAt, createdAt }} = this.props;
      return (
        <div className="container">
          <h4 className="center">{title}</h4>
          <span className="grey-text">{`Created: ${createdAt}`}</span>
          <span className="grey-text">{`Updated: ${updatedAt}`}</span>
          <p>{body}</p>
          <div style={{ cursor: 'pointer' }}>
            <i className="blue-text material-icons" onClick={this.toggleEdit}>edit</i>
            <i className="red-text material-icons" onClick={this.deleteNote}>delete</i>
          </div>
        </div>
      )
    } else {
      return (<h4 className="center">Loading Note...</h4>)
    }
  }

  render() {
    return this.state.edit ? this.edit() : this.show();
  }

}

const mapStateToProps = (state, props) => {
  return { note: state.notes.find( n => n._id === props.params.id ) }
}


export default connect(mapStateToProps)(Note);
