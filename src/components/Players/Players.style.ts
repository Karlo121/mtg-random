import styled from "styled-components";

export const PlayersContainer = styled.div`
    background-color: #424549;
    margin-bottom: 30px;
    border-radius: 10px;
    .playerCount {
        background-color: #424549;
        padding: 10px;
        border-radius: 10px;
        width: 732px;
        color: black;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: Arial, Helvetica, sans-serif;
        

        img {
            width: 500px;
            margin: 0 auto;
        }
    }

    .playerCountValue {
        color: white;
        font-size: 50px;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0 auto;
    }
    .playerCountLabel {
        text-align: center;
        font-size: 30px;
        font-family: Helvetica;
        color: white;
    }
    .playerCountInput {
        width: 200px;
        margin: 0 auto;
        text-align: center;
        border-radius: 50px;
        border: 2px solid black;
        display: block;
    }
`