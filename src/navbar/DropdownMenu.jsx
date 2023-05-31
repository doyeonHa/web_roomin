import React from "react";
// npm install styled-components
import styled from "styled-components";

const DropdownMenu = () => {

	return (
    <>
		<Wrapper>
			<Link href="/photoshoot">PHOTO</Link>
			<Link href="/">네컷갤러리</Link>
		</Wrapper>
    </>
	);
};

export default DropdownMenu;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  column-gap: 44px;
  color: white;
  font-size: 15px;
  width: 220px;
`;

const Link = styled.a`
font-family: 'Noto Serif';
  font-weight: medium;
  text-decoration: none;
  color: black;
  font-size: 16px;
  width: 50%;
  display: block;
  text-align: center;
  border-radius: 24px;
  box-shadow: 1px 1px 1px 1px #BDBDBD;
  &:hover {
    transition: all .3s;
    border: 1px solid #ABBF98;
  }
`;