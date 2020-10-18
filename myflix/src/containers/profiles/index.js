import React from 'react';
import * as ROUTES from '../../constants/routes';
import { Header, Profiles } from '../../components';
import logo from '../../logo.svg';

export default function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header background={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.BROWSE} src={logo} alt="Myflix" />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
