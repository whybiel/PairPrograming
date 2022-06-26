import React from "react";
import styled from "styled-components";

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


export default function App() {
    return (
        <Container>
            <SectionRecipes>
                <Title>LATEST RECIPES</Title>
                <HrTitle></HrTitle>
                <BoxDiv>
                    <Card>
                        <Img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=3f630898-5430-4084-a530-83df642c4b76&api_key=CometServer1&access_token=1656306478_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_ecbd3b9f705cad051d83de44dfeddb575c60aeb6" />
                        <Hr></Hr>
                        <Legend>Red Velvet Cake</Legend>
                    </Card>
                    <Card>
                        <Img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=6940ecee-9497-47c7-bc32-30dc58ecb408&api_key=CometServer1&access_token=1656306478_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_ecbd3b9f705cad051d83de44dfeddb575c60aeb6" />
                        <Hr></Hr>
                        <Legend>Margherita Pizza</Legend>
                    </Card>
                    <Card>
                        <Img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e048e30a-811b-49f2-a92f-1af9a2985abd;revision=0?component_id=bf663e2d-434a-4d4d-8185-a9a0e5dce49d&api_key=CometServer1&access_token=1656306478_urn%3Aaaid%3Asc%3AUS%3Ae048e30a-811b-49f2-a92f-1af9a2985abd%3Bpublic_ecbd3b9f705cad051d83de44dfeddb575c60aeb6" />
                        <Hr></Hr>
                        <Legend>Peanut Smoothie</Legend>
                    </Card>
                </BoxDiv>
            </SectionRecipes>
            
            <section></section>
            <section></section>
        </Container>
    )
}