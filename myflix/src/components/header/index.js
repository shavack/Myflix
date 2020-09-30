import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Logo, ButtonLink, Container, Background } from './styles/header';

export default function Header({ background = true, children, ...restProps }) {
  return background ? <Background {...restProps}> {children} </Background> : children;
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />;
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Background = function HeaderBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
};
