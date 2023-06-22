import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import image from '../image/test.png';
import image1 from '../image/pink.png';
import image2 from '../image/blue.png';
import image3 from '../image/mark.png';
import '../navbar/index.css'

const Navbar = () => {
  return (
    <Container>
		  <Nav >
        <Blue style={{backgroundImage: `url(${image2})`}}></Blue>
        <Pink style={{backgroundImage: `url(${image1})`}}></Pink>
        <Logo style={{backgroundImage: `url(${image})` , width :700, height: 700}} id="test"></Logo>
		  </Nav>
      <Minilogo style={{backgroundImage: `url(${image3})`}}></Minilogo>
	  </Container>
  );
};

const Container = styled.div`
  height: 8%;
  width: 98%;
  margin: 0 auto;
`;
const Pink = styled.div`
  width: 778px;
  height: 778px;
  background-size: cover;
`
const Blue = styled.div`
  width: 900px;
  height: 778px;
  background-size: cover;
  margin-top: 305px;
  position: absolute;
  margin-left: 14%;
`
const Logo = styled.div`
  position: absolute;
  background-size: cover;
  left: 15%;
  top: 15%;
`

const Nav = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 55%;
  height: 100vh;
  display: flex;
`;

const Minilogo = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  background-size: cover;
  left: 92%;
  top: 86%;
`

export default Navbar;
