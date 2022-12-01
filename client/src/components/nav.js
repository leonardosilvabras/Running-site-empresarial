import styled from "styled-components";
import LogoBlack from "../assets/images/logoRed.png"  
import AdminLogo from '../assets/images/icons/operario.png'

const nav = () => {
    const NavBar = styled.nav`
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 3;
        width: 100%;
        height: 3rem;
        background-color: white;
    `

    const NavLogo = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10rem;
        img {
            width: 5rem;
        }
    `


    const NavItems = styled.ul`
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 30rem;
    `

    const NavItem = styled.li`
        list-style: none;        
        color: black;
    `

    const NavButton = styled.a`
        text-decoration: none;
        color: black;
        transition: .2s;

        &:hover {
            cursor:pointer;
            color: #FE2E2E;
        }
    `

    const Icon = styled.img`
        width: 1.5rem;
    `;

    return (
        <NavBar>
            <NavLogo>
                <img src={LogoBlack} alt="logo"/>
            </NavLogo>
            <NavItems>
                <NavItem>
                    <NavButton href="#Home">Inicio</NavButton>
                </NavItem>
                <NavItem>
                    <NavButton href="#Projetos">Serviços</NavButton>
                </NavItem>
                <NavItem>
                    <NavButton href="#Contato">Contato</NavButton>
                </NavItem>
                <NavItem>
                    <NavButton href="/Admin">
                        <Icon src={AdminLogo} alt="operario" />
                    </NavButton>
                </NavItem>
            </NavItems>
        </NavBar>
    )
}

export default nav;