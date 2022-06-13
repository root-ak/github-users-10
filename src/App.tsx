import React from 'react';
import styled from 'styled-components';

import { UsersPage } from './pages/users';
import {
  userDetails,
  users,
} from './store';

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <UsersPage
        userDetails={userDetails}
        users={users}
      />
    </StyledApp>
  );
}

export default App;
