import React from "react";
import styled from "styled-components";

import insta from "../img/insta.png"
import tt from "../img/twitter.png"
import face from "../img/face.png"
import pinterest from "../img/pinterest.png"

const Container = styled.div`
    width: 100%;
    height: 15em;

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width:768px) {
        height: 30em;

        flex-direction: column-reverse;
    }
`
const SectionImg = styled.section`
    width: 100%;

    @media (max-width:768px) {
        display: flex;
        justify-content: center;
    }
`
const ImgSocial = styled.img`
    width: 40px;
    height: 40px;

    margin-left: 1em;
    
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }

    @media (max-width:768px) {
        width: 60px;
        height: 60px;

        margin: 0 0.5em 0 0.5em;
    }
`

const List = styled.ul`
    width: 30em;
    height: 3em;

    display: flex;
    justify-content:space-around;
    align-items: center;

    list-style:none;

    @media (max-width:768px) {
        flex-direction: column;
    }
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

    @media (max-width:768px) {
        font-size: 1.8em;

        margin: 1em 0 0em 0;
    }
`
export default function App() {
    return (
        <Container>
            <SectionImg>
            <ImgSocial src={insta}/>
            <ImgSocial src={tt}/>
            <ImgSocial src={face}/>
            <ImgSocial src={pinterest}/>
            </SectionImg>
           
            <nav>
                <List>
                    <Item>ABOUT</Item>
                    <Item>RECIPES</Item>
                    <Item>SUBSCRIBE</Item>
                </List>
            </nav>
        </Container>
    )
}