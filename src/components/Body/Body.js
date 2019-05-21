import React, { useContext } from 'react';
import { ExpandableContext } from '../../context/ExpandableContext';

import './Body.css';

const Body = ({ children, className = '', ...otherProps }) => {
    const { expanded } = useContext(ExpandableContext);

    const combinedClassNames = ['Expandable-panel', className].join('');

    return expanded ? (
        <div className={combinedClassNames} {...otherProps}>
            {children}
        </div>
    ) : null;
};

export default Body;
