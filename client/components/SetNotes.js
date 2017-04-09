import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions/notes';

class SetNotes extends React.Component {
  componentDidMount() {
    this.props.dispatch(getNotes());
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes }
}

export default connect(mapStateToProps)(SetNotes);
