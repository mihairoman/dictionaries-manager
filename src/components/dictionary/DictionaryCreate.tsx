import * as React from 'react';
import { connect } from 'react-redux';
import { createDictionary, updateDictionary } from '../../store/dictionaries/actions';
import { Redirect } from 'react-router-dom';
import DictionaryDetails from './DictionaryDetails';
import { AppState } from '../../store/rootReducer';
import { DictionaryFormMode, Dictionary } from '../../store/dictionaries/types';

interface IProps {
    dictionary?: Dictionary
    createDictionary: (Dictionary) => any
    updateDictionary: (Dictionary) => any
    mode: DictionaryFormMode
}

interface DictionaryCreateState {
    redirect: boolean
}

class DictionaryCreate extends React.Component<IProps, DictionaryCreateState> {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(formData) {
        event.preventDefault();

        const { mode, createDictionary, updateDictionary } = this.props;

        if (mode === DictionaryFormMode.NEW) {
            createDictionary(formData);
            this.setState(() => {
                return {
                    redirect: true
                }
            });
        } else {
            updateDictionary(formData);
            this.setState(() => {
                return {
                    redirect: true
                }
            });
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }

        const { dictionary, mode } = this.props;

        return (
            <React.Fragment>
                <DictionaryDetails initialData={dictionary} onSubmit={this.handleSubmit} formMode={mode}>
                </DictionaryDetails>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps) => {
    const { dictionaries } = state.dictionaries;
    const { id } = ownProps.match.params;
    if (id) {
        const currentDictionary = dictionaries.find((dictionary) => dictionary.id === id);
        return {
            dictionary: currentDictionary,
            mode: DictionaryFormMode.EDIT
        }
    }

    return {
        mode: DictionaryFormMode.NEW
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        createDictionary: (dictionary) => dispatch(createDictionary(dictionary)),
        updateDictionary: (dictionary) => dispatch(updateDictionary(dictionary))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DictionaryCreate);