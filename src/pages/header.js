import React from "react";
import styled from "styled-components";

import bgheader from "../img/bgheader.png"
import bgheaderMob from "../img/bgheadermobile.png"

const Container = styled.section`
    width:100%;
    height: 85em;

    background-image: url(${bgheader});
    background-size: cover;

    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width:768px) {
        background-image: url(${bgheaderMob});
    }

`
const Subcontainer = styled.div`
    width: 90%;

    display: flex;
    justify-content: space-between;
    padding:1.5em 0vh 0 0;

    @media (max-width:768px) {
        display: none;
    }
`
const Menu = styled.img`
    display: none;

    @media (max-width:768px) {
        width: 30px;
        display: inline-block;
        align-self: flex-end;
        margin: 1em 1em 0 0;
    }
`

const Logo = styled.h2`
    font-size:2em;
`
const NavBar = styled.nav`
    
`
const List = styled.ul`
    width: 30em;
    height: 3em;

    display: flex;
    justify-content:space-around;
    align-items: center;

    list-style:none;
`
const Item = styled.li`
    width: 8em;
    height: 2.7em;
    
    font-weight:200;
    font-size: 1.1em;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor:pointer;

    &:hover{
        border:3px solid black
    }
`

const BoxTitle = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: #373737;

    font-size: 10em;
    font-weight: 600;

    letter-spacing: 10px;

    @media (max-width:768px) {
        font-size: 3em;
    }
`

export default function App() {
    return (
        <Container>
            <Subcontainer>
                <Logo>RC</Logo>
                <NavBar>
                    <List>
                        <Item>ABOUT</Item>
                        <Item>RECIPES</Item>
                        <Item>SUBSCRIBE</Item>
                    </List>
                </NavBar>
            </Subcontainer>
            <Menu src="https://cdn-icons.flaticon.com/png/512/3018/premium/3018960.png?token=exp=1656704669~hmac=58114c5d2f0966c0463926205b08abda"/>
            <BoxTitle>
                <Title>RECIPES</Title>
            </BoxTitle>
        </Container>
    )
}