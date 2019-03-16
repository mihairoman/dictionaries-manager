import * as React from 'react';

const ButtonFloating = ({ size = 'large', iconName = 'add', classes = 'red lighten-2' }) => {

    const sizeCls = size ? `btn-${size}` : '';
    const btnCls = `btn-floating ${sizeCls} ${classes}`;

    return (
        <a className={btnCls}>
            <i className={`${size} material-icons`}>{iconName}</i>
        </a>
    );
}

export default ButtonFloating;