import React, { useContext } from 'react';
import { ExpandableContext } from '../../context/ExpandableContext';

import './Icon.css';

const Icon = ({ className = '', ...otherProps }) => {
    const { expanded } = useContext(ExpandableContext);
    const combinedClassNames = ['Expandable-icon', className].join('');

    return (
        <span className={combinedClassNames} {...otherProps}>
            {expanded ? '-' : '+'}
        </span>
    );
};

export default Icon;
