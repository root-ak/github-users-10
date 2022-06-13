import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import {
    Button,
    ListItem,
    ListPane,
    LoadingPane,
} from '../components';
import {
    UserDetails,
    Users,
} from '../store';

import Details from './user-details-pane';

const Header = styled.h3`
    margin-top: 0;
    text-align: center;
`;

const LoadingContainer = styled.div`
    min-width: 20vw;
    min-height: 20vh;
    border-radius: 1rem;
    background-color: white;
    display: flex;
    justifyContent: center;
    alignItems: center;
`;

interface Props {
    userDetails: UserDetails;
    users: Users;
}
export const UsersPage = observer<Props>(props => {
    let [detailsOpen, setDetailsOpen] = React.useState<boolean>(false);

    const selectUser = React.useCallback((userId: number) => {
        props.userDetails.load(userId);
        setDetailsOpen(true);
    }, [props.userDetails]);

    const loadAnotherUsers = React.useCallback(() => {
        props.users.load();
    }, [props.users]);

    React.useEffect(() => {
        props.users.load();
    }, [props.users]);

    const closeDetails = () => setDetailsOpen(false);

    if (detailsOpen) {
        return (
            props.userDetails.loading
            ? <LoadingContainer>
                <LoadingPane />
            </LoadingContainer>
            : <Details
                avatarUrl={props.userDetails.data.avatarUrl}
                login={props.userDetails.data.login}
                name={props.userDetails.data.name}
                email={props.userDetails.data.email}
                close={closeDetails}
            />
        );
    }

    if (props.users.loading) {
        return (
            <LoadingContainer>
                <LoadingPane />
            </LoadingContainer>
        );
    }

    return (
        <ListPane>
            <Header>10 random GitHub users</Header>
            {
                props.users.data.map(item =>
                    <ListItem
                        key={item.id}
                        onClick={() => selectUser(item.id)}
                    >
                        {item.login}
                    </ListItem>
                )
            }
            <Button onClick={loadAnotherUsers}>
                Load more users
            </Button>
        </ListPane>
    );
});
