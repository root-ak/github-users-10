import React from 'react';
import styled from 'styled-components';

const StyledLoadingPane = styled.div`
    flex: 1 1 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoadingPane: React.FC = () => {
    return (
        <StyledLoadingPane>
            Loading...
        </StyledLoadingPane>
    );
};
