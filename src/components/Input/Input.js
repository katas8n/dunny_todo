import React from 'react';

export const Input = ({
    type,
    label,
    className,
    onSubmitHandler,
    onChangeHandler,
    value
}) => {
    return (
        <input
            value={value}
            onChange={onChangeHandler}
            onSubmit={onSubmitHandler}
            aria-label={label}
            type={type}
            className={className}
            placeholder={label}
        ></input>
    );
};
