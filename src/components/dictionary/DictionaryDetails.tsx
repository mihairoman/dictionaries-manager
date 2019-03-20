import * as React from 'react';
import { Dictionary, DictionaryRow, DictionaryFormMode } from '../../store/dictionaries/types';
import ButtonFloating from '../shared/ButtonFloating';

interface IProps {
    initialData?: Dictionary,
    formMode?: DictionaryFormMode
    onSubmit: (Dictionary) => void
}

interface IState extends Dictionary {
    isFormValid: boolean
}

class DictionaryDetails extends React.Component<IProps, IState> {
    private domainInputRef: React.RefObject<HTMLInputElement>;
    private rangeInputRef: React.RefObject<HTMLInputElement>;
    private nameInputRef: React.RefObject<HTMLInputElement>;

    constructor(props: IProps) {
        super(props);

        const { initialData, formMode } = props;
        const isInEditMode = formMode === DictionaryFormMode.EDIT;
        let formData = { name: '', rows: [] };

        if (isInEditMode) {
            formData = initialData;
        }

        this.state = {
            ...formData,
            isFormValid: isInEditMode || false
        }

        this.domainInputRef = React.createRef();
        this.rangeInputRef = React.createRef();
        this.nameInputRef = React.createRef();
        this.handleAddRow = this.handleAddRow.bind(this);
        this.handleRemoveRow = this.handleRemoveRow.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
    }

    handleAddRow() {
        this.domainInputRef.current.classList.remove('invalid');
        this.rangeInputRef.current.classList.remove('invalid');

        let domain = this.domainInputRef.current.value.trim();
        let range = this.rangeInputRef.current.value.trim();

        if (!(domain && range)) {
            if (!domain) this.domainInputRef.current.classList.add('invalid');
            if (!range) this.rangeInputRef.current.classList.add('invalid');
            return;
        }

        const newRow: DictionaryRow = { domain, range };

        this.setState(({ rows }) => {
            return {
                rows: [...rows, newRow]
            }
        });

        this.rangeInputRef.current.value = '';
        this.domainInputRef.current.value = '';
    }

    handleRemoveRow(rowIndex: number) {
        this.setState(({ rows }) => {
            return {
                rows: rows.filter((row, index) => index !== rowIndex)
            }
        });
    }

    handleNameChange(e) {
        e.target.classList.remove('invalid');
        const newVal = e.target.value.trim();
        this.setState({
            name: newVal
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { rows, name, id } = this.state;
        let formIsValid = true;

        if (!name) {
            this.nameInputRef.current.classList.add('invalid');
            formIsValid = false;
        }
        if (rows.length === 0) {
            this.domainInputRef.current.classList.add('invalid');
            this.rangeInputRef.current.classList.add('invalid');
            formIsValid = false;
        }

        if (formIsValid) {
            this.props.onSubmit({ rows, name, id })
        }
    }

    handleInputFocus(e) {
        e.persist();
        e.target.classList.remove('invalid');
    }

    renderNewRowInputs() {
        return (
            <div className='row' style={{ position: 'relative' }}>
                <div className='col s10 m5'>
                    <div className='input-field required'>
                        <input ref={this.domainInputRef} id='domain' type='text'
                            onFocus={this.handleInputFocus}
                            className='validate' placeholder='Domain' maxLength={75} />
                    </div>
                </div>
                <div className='col s10 m5'>
                    <div className='input-field required'>
                        <input ref={this.rangeInputRef} id='range' type='text'
                            onFocus={this.handleInputFocus}
                            className='validate' placeholder='Range' maxLength={75}
                        />
                    </div>
                </div>
                <div className='col s2 form-button'>
                    <a href='#' onClick={this.handleAddRow}
                        className='btn-floating btn-small waves-effect waves-light red lighten-3'
                    >
                        <i className='material-icons'>add</i>
                    </a>
                </div>
            </div>
        );
    }

    renderNameInput() {
        return (
            <div className='input-field required'>
                <input
                    ref={this.nameInputRef}
                    onChange={this.handleNameChange}
                    placeholder='Dictionary name'
                    value={this.state.name}
                    id='name' type='text' className='validate' required maxLength={75}
                />
            </div>
        );
    }

    renderRows() {
        return (this.state.rows.length > 0 &&
            this.state.rows.map((row, index) =>
                <li key={index} className='collection-item'>
                    <span>{row.domain}</span>
                    <span>{row.range}</span>
                    <a href='#'
                        className='waves-effect waves-light red-text text-lighten-3'
                        onClick={this.handleRemoveRow.bind(this, index)}
                    >
                        <i className='material-icons'>delete</i>
                    </a>
                </li>
            )
        );
    }

    render() {
        return (
            <div className='row form-container'>
                <form className='col s12'>
                    {this.renderNewRowInputs()}
                    <div className='row'>
                        <ul className='col s10 collection with-header'>
                            <li className='collection-header'>
                                {this.renderNameInput()}
                            </li>
                            {this.renderRows()}
                        </ul>
                    </div>
                </form>
                <ButtonFloating
                    disabled={false}
                    size='large'
                    iconName='send'
                    classes='red lighten-2 pulse'
                    onClick={this.handleSubmit}
                />
            </div>
        );
    }
}

export default DictionaryDetails;