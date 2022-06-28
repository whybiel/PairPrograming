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
`
const SectionImg = styled.section`
    width: 30%;
`
const ImgSocial = styled.img`
    width: 40px;
    height: 40px;

    margin-left: 1em;
    
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
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