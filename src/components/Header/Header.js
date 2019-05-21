import React, { useContext } from 'react';
import { ExpandableContext } from '../../context/ExpandableContext';

import './Header.css';

const Header = ({ children, className = '', ...otherProps }) => {
    const { toggle } = useContext(ExpandableContext);

    const combinedClassName = ['Expandable-trigger', className].join('');

    return (
        <button onClick={toggle} className={combinedClassName} {...otherProps}>
            {children}
        </button>
    );
};

export default Header;
