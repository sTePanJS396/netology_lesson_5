import React from 'react';

const Collapse = ({ children, collapseLabel, expandedLabel, onExpandedChange, isExpanded }) => {
    return (
        <div className='collapse'>
            <div className={`collapse-top ${isExpanded && 'collapse-active'}`}>
                {children}
            </div>
            <div className='collapse-bottom'>
                <button className='collapse-button' onClick={onExpandedChange}>{!isExpanded ? collapseLabel : expandedLabel}</button>
            </div>
        </div>
    )
}
Collapse.defaultProps = {
    collapseLabel: 'Свернуть',
    expandedLabel: 'Развернуть'
}

export default Collapse