import React from 'react';
import styled from 'styled-components';

import { Button } from '../components';

const DetailsPane = styled.div`
    border-radius: 1rem;
    padding: 2rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

const DetailsAvatar = styled.img`
    width: 10rem;
    height: 10rem;
`;

const DetailsRow = styled.div`
    padding: 0.5rem;
    font-size: 1rem;
`;

interface UserDetailsPaneProps {
    avatarUrl: string;
    login: string;
    name: string;
    email: string;
    close: () => void;
}
const UserDetailsPane: React.FC<UserDetailsPaneProps> = props => {
    return (
        <DetailsPane>
            <DetailsAvatar src={props.avatarUrl} />
            <DetailsRow>
                Login: {props.login || '-'}
            </DetailsRow>
            <DetailsRow>
                Name: {props.name || '-'}
            </DetailsRow>
            <DetailsRow>
                Email: {props.email || '-'}
            </DetailsRow>
            <Button onClick={props.close}>
                Back to users list
            </Button>
        </DetailsPane>
    );
};

export default UserDetailsPane;
