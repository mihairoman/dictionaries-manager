import * as React from 'react';
import { Dictionary } from '../../store/dictionaries/types';

interface TableProps {
    data?: Dictionary,
    isPreviewTable?: boolean
}

const Table: React.SFC<TableProps> = ({ data, isPreviewTable = false }) => {

    const { rows, id } = data;
    const rowsToDisplay = isPreviewTable ? rows.slice(0, 5) : rows;

    return (
        <table className='striped'>
            <thead>
                <tr>
                    <th>domain</th>
                    <th>range</th>
                </tr>
            </thead>
            <tbody>
                {rowsToDisplay.map((row, index) => {
                    return (
                        <tr key={`${id}-row-${index}`}>
                            <td>{row.domain}</td>
                            <td>{row.range}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;