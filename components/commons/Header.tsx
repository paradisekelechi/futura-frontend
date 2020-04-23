import React from 'react';
import styled from 'styled-components';
import Colors from '../utils/Colors';

export interface HeaderProps {

}

const Nav = styled.nav`
`;


export const Wrapper = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
`;

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 0px;
    box-sizing: border-box;
`;

const Logo = styled.span`
    font-family: 'Berkshire Swash', cursive;
    font-size: 26px;
    color: ${Colors.darkBlue};
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 320px;
    margin: 0;
    opacity: 1;
`;

const NavItem = styled.li`
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
`;

const A = styled.a`
    letter-spacing: 0px;
    color: ${Colors.darkGrey};
    text-decoration: none;
`;






const Header: React.SFC<HeaderProps> = () => {
    return (
        <Nav>
            <Wrapper>
                <NavWrapper>
                    <Logo>Futura</Logo>
                    <NavList>
                        <NavItem><A href="#">Home</A></NavItem>
                        <NavItem><A href="#">About us</A></NavItem>
                        <NavItem><A href="#">Sign Up</A></NavItem>
                        <NavItem><A href="#">Log in</A></NavItem>
                    </NavList>
                </NavWrapper>
            </Wrapper>
        </Nav>
    );
}

export default Header;