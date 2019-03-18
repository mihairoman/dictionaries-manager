import * as React from 'react';
import { Link } from 'react-router-dom';

interface ButtonFloatingProps {
    iconName?: string
    size?: string
    classes?: string
    link?: string
    onClick?: (event: React.MouseEvent) => void,
    disabled?: boolean
}

const ButtonFloating: React.SFC<ButtonFloatingProps> = (props) => {

    const { size, iconName, classes, link, onClick, disabled } = props;
    const sizeCls = size ? `btn-${size}` : '';
    const btnCls = `btn-floating ${sizeCls} ${classes}`;

    return (
        <div className='fixed-action-btn' style={{ bottom: '6%', right: '4%' }}>
            <Link to={link} className={btnCls} onClick={onClick} disabled={disabled}>
                <i className={`${size} material-icons`}>{iconName}</i>
            </Link>
        </div>
    );
}

ButtonFloating.defaultProps = {
    link: '',
    iconName: 'add',
    disabled: false
}

export default ButtonFloating;