import React from "react";
import LogoImg from "../../assets/corrida.png"
import { Container, Logo, Menu } from "./styles";

const Header = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="" />
                <h2>Car</h2>
            </Logo>
            <Menu>
                <ul>
                    <li><span> Cadastro </span></li>
                    <li><span> Login </span></li>
                </ul>
            </Menu>
        </Container>
    )
}

export default Header;