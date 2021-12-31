import React from 'react';

export const Button = ({ children, className, onClickHandler, id }) => {
    return (
        <button id={id} onClick={e => onClickHandler(e)} className={className}>
            {children}
        </button>
    );
};
