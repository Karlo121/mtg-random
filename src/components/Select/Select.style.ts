import styled from "styled-components";

export const SelectContainer = styled.div`
    .radioContainer {
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
        color: black;
        border-radius: 10px;
        display: flex;
        width: calc(100vw - 40px);
        background-color: #424549;
    }
    .playerBoxes {
        padding: 5px;
        display: flex;
        flex-flow: row wrap;   
        justify-content:  space-around;  
    }
    .radioBox{
        flex-direction: row;
        margin: 10px 10px;
        gap: 2rem;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 1rem;
        width: 250px;
        height: 30px;
        display: flex;
        flex-direction: row;
        background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%);

        :hover {
            background-image: linear-gradient(315deg, #5b6467 0%, orange 74%);
        }
    }

    .formName {
        font-size: 30px;
        color: white;
        margin-top: 0px;
    }
    .formInput {
        margin: 10 auto;
        border: 1px solid green;
    }
    .headerTitle {
        width: 300px;
        margin: 0 auto;
        writing-mode: horizontal-tb;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 35px;
    };

    input[type='radio'] { 
        transform: scale(2.3); 
    };

    @media (max-width: 950px) {
        width: 100vw;
    }
    
`;