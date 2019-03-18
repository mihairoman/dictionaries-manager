import * as React from 'react';
import { Dictionary } from '../../store/dictionaries/types';
import Table from '../shared/Table';
import { connect } from 'react-redux';
import { deleteDictionary } from '../../store/dictionaries/actions';
import { Link } from 'react-router-dom';

interface DictionaryCardProps {
  data: Dictionary
  key: string
}

interface DispatchProps {
  deleteDictionary: (id) => void
}

type Props = DictionaryCardProps & DispatchProps;

class DictionaryCard extends React.Component<Props> {

  constructor(props) {
    super(props);
    this.handleDeleteDictionary = this.handleDeleteDictionary.bind(this);
  }

  handleDeleteDictionary(event) {
    event.preventDefault();
    const { id } = this.props.data;
    this.props.deleteDictionary(id);
  }

  render() {
    const { name, id } = this.props.data;

    return (
      <div className="card">
        <div className="card-header truncate">
          <span>{name}</span>
        </div>
        <div className="card-content blue-text text-darken-2">
          <Table
            data={this.props.data}
            isPreviewTable={true}
          />
        </div>
        <div className="card-action">
          <Link to='/'><i className='material-icons'>check</i></Link>
          <Link to={{ pathname: `/dictionary/${id}` }}><i className='material-icons'>edit</i></Link>
          <Link to='/' onClick={this.handleDeleteDictionary}><i className='material-icons'>delete</i></Link>
        </div>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteDictionary: (id) => dispatch(deleteDictionary(id))
  }
}

export default connect(null, mapDispatchToProps)(DictionaryCard);