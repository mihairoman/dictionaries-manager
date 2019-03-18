import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import DictionaryDetails from './DictionaryDetails';
import { AppState } from '../../store/rootReducer';


interface DictionaryEditProps {

}

class DictionaryEdit extends React.Component<DictionaryEditProps & RouteComponentProps> {

    render() {
        const { name, rows } = this.props;

        return (
            <div></div>
            // <DictionaryDetails
            //     data={{ name, rows }}
            // />
        );
    }
}

const mapStateToProps = (state: AppState, ownProps) => {
    const { dictionaries } = state.dictionaries;
    const { id } = ownProps.match.params;
    const currentDictionary = dictionaries.find((dictionary) => dictionary.id === id);
    return {
        ...currentDictionary
    }
}

export default connect(mapStateToProps)(DictionaryEdit);