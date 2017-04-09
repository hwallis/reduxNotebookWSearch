import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';

class Notes extends React.Component {
  state = { searching: false }

  filteredNotes = () => {
    if (this.state.searching) {
      let value = this.search.value;
      let regex = new RegExp(value.toLowerCase())
      return this.props.notes.filter( n => {
        if (regex.test(n.title.toLowerCase()))
          return n;
        else if (regex.test(n.body.toLowerCase()))
          return n;
      })
    } else {
      return this.props.notes;
    }
  }

  searching = () => {
    if (this.search.value === '') {
      this.setState({ searching: false });
    } else {
      this.setState({ searching: true });
    }
  }

  render() {
    let noteList = this.filteredNotes().map( note => {
      return (
        <li key={note._id} className="collection-item">
          <div>
            { note.title }
            <span className="secondary-content">
              <Link to={`/notes/${note._id}`}>
                <i className="material-icons">send</i>
              </Link>
            </span>
          </div>
        </li>
      )
   });
  
   return (
     <div className="container">
       <h4>Notebook</h4>
       <hr/>
       <label>Search</label>
       <input onKeyUp={this.searching} ref={ n => this.search = n } />
       <div className="row">
         <div className="col s12 m6">
           <NoteForm />
         </div>
         <ul className="collection col s12 m6">
           { noteList.length ? 
               noteList : 
               <li className="collection-item">Add Notes To Get started</li> 
           }
        </ul>
      </div>
    </div>
   )
  }
}

const mapStateToProps = (state) => {
 return { notes: state.notes }
}

export default connect(mapStateToProps)(Notes);
