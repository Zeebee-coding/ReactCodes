import React, { useState } from "react";
import styled from "styled-components";
import {selectCars} from '../features/car/carSlice';
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const [burgerStatus, setBugerStatus] = useState(false);
  const cars = useSelector(selectCars)
  console.log(cars);
  return (
    <Container>
      <a>
        <img src="/images/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars && cars.map((car, index) =>(
          <a key={index} href="#">{car}</a>
        ))}
        {/* <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a> */}
      </Menu>
      <RightMenu>
        <a href="#">Shop Now</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBugerStatus(true)}/>
      </RightMenu>
      <BergerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBugerStatus(false)}/>
        </CloseWrapper>
        {cars && cars.map((car, index) =>(
        <li key ={index}><a href="#">{car}</a></li>))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
      </BergerNav>
    </Container>
  );
}
export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const BergerNav = styled.div`
  position: fixed;
  background-color: white;
  width: 300px;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ;
  li {
    padding: 15px 0;
    border-bottom: 1px solid(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
