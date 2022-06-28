import React from "react";
import styled from "styled-components";

import pizza from "../img/pizzamargerita.png"
import bolo from "../img/bolo.png"
import amendoin from "../img/amendoin.png"
import colher from "../img/colher.png"

const Container = styled.section`
    width: 100%;
`
const SectionRecipes = styled.section`
    width: 100%;
    height: 30em;

    margin:15em 0 3em 0;
`
const Title = styled.h2`
    color:#373737;

    font-size: 1.8em;
    font-weight: 600;
    text-align: center;

    margin:0em 0 0.6em 0;
`
const HrTitle = styled.hr`
    width: 80px;
    height: 4px;

    background-color: #373737;

    border-radius: 5px;
    border:none;

    margin:0em 0 3em 42em;
`

const BoxDiv = styled.div`
    width: 85%;
    height: 90%;

    margin: auto;

    display: flex;
    justify-content: space-evenly;
`
const Card = styled.div`
    width: 25%;

    cursor: pointer;

    overflow: hidden;

    box-shadow: 0px 7px 6px #00000029;
`

const Img = styled.img`
    width: 100%;
    height: 50%;

    transition:1s;

    &:hover{
        transform: scale(1.2);
    }
`
const Hr = styled.hr`
    width: 40px;
    height: 3px;

    background-color: #373737;

    border-radius: 5px;
    border:none;

    margin:4.5em 0 0 8em;
`

const Legend = styled.h3`
    font-weight: 300;
    text-align: center;

    padding:1em 0 0 0em;
`

const AboutSection = styled.section`
    width: 100%;
    height: 45em;

    margin:15em 0 0em 0;

    display: flex;
`
const ImgAbout = styled.img`
    width: 50%;
    height: 100%;

`
const BoxAbout = styled.div`
    width: 50%;
    height: 100%;

`
const TitleAbout = styled.h2`
    color:#373737;

    font-size: 1.8em;
    font-weight: 600;
    text-align: center;

    margin:5em 0 0.6em 0;
`
const HrAbout = styled.hr`
    width: 80px;
    height: 4px;

    background-color: #373737;

    border-radius: 5px;
    border:none;

    margin:0em 0 3em 19.6em;

`
const PAbout = styled.p`
    width: 61%;
    
    text-align: left;
    font-weight: 200;

    margin: 0em auto;
`
const SectionSubscribe = styled.section`
    width: 100%;
    height: 35em;

    background-color: #DFE4DE;

    display: flex;
    flex-direction: column;
    align-items: center;
`   
const TitleSubs = styled.h2`
    color:#373737;

    font-size: 1.8em;
    font-weight: 600;
    text-align: center;

    margin:4em 0 0.6em 0;
`
const SubTitle = styled.h3`
    color: #373737;

    text-align: center;
    letter-spacing: 2.05px;
    font-weight: 200;
`
const BoxSubmit = styled.div`
    width: 50%;
    height: 10em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin: 3em 0 0 0 ;
`

const Input = styled.input`
    width: 35em;
    height: 5em;

    padding-left: 1em;

    border: none;

    background-color: #EFF1EE;
`
const Btn = styled.button`
    width: 20%;
    height: 3em;

    border: 3px solid #373737 ;
    background-color: transparent;

    font-weight: 600;
    letter-spacing: 6.14px;

    cursor: pointer;

    &:hover{
        background-color:  #373737;
        color: #fff;
    }
`


export default function App() {
    return (
        <Container>
            <SectionRecipes>
                <Title>LATEST RECIPES</Title>
                <HrTitle></HrTitle>
                <BoxDiv>
                    <Card>
                        <Img src={pizza} />
                        <Hr></Hr>
                        <Legend>Red Velvet Cake</Legend>
                    </Card>
                    <Card>
                        <Img src={bolo}/>
                        <Hr></Hr>
                        <Legend>Margherita Pizza</Legend>
                    </Card>
                    <Card>
                        <Img src={amendoin} />
                        <Hr></Hr>
                        <Legend>Peanut Smoothie</Legend>
                    </Card>
                </BoxDiv>
            </SectionRecipes>

            <AboutSection>
                <ImgAbout src={colher} />
                <BoxAbout>
                    <TitleAbout>ABOUT</TitleAbout>
                    <HrAbout></HrAbout>
                    <PAbout>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</PAbout>
                </BoxAbout>
            </AboutSection>

            <SectionSubscribe>
                <TitleSubs>SUBSCRIBE</TitleSubs>
                <SubTitle>Sign up for newsletter</SubTitle>
                <BoxSubmit>
                <Input placeholder="Your Email"/>
                <Btn>SUBMIT</Btn>
                </BoxSubmit>
                
            </SectionSubscribe>
        </Container>
    )
}