import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const ListItem = styled.div`
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background-color: grey;
        color: white;
    }
`;
