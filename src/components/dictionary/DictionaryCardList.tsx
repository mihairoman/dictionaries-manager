import * as React from 'react';
import { connect } from 'react-redux';
import { Dictionary } from '../../store/dictionaries/types';
import DictionaryCard from './DictionaryCard';
import ButtonFloating from '../shared/ButtonFloating';

interface DictionaryCardListProps {
    dictionaries: Dictionary[]
}

const DictionaryCardList: React.SFC<DictionaryCardListProps> = ({ dictionaries }) => {
    return (
        <React.Fragment>
            <div className="cards-container">
                {dictionaries.map((dictionary) => {
                    return <DictionaryCard key={dictionary.id} data={dictionary} />
                })}
            </div>
            <ButtonFloating size='large' link='/createDictionary' classes='red lighten-2'/>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    const { dictionaries } = state;
    return dictionaries;
}

export default connect(mapStateToProps)(DictionaryCardList);