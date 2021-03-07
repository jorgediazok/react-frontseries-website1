import React from 'react';
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarBtnWrap,
  SidebarRoute,
} from './SidebarElements';

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about">About</SidebarLink>
            <SidebarLink to="discover">Discover</SidebarLink>
            <SidebarLink to="services">Services</SidebarLink>
            <SidebarLink to="signup">Sign Up</SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SidebarBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
