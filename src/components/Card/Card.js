import React from 'react';

import styled from './Card.module.css';

export const Card = ({ children }) => {
    return <div className={styled.cards}>{children}</div>;
};
