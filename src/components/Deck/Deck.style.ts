import styled from "styled-components";

export const DeckContainer = styled.div`
    border-radius: 10px;
    width: 600px;
    margin: 10px auto;
    padding: 10px;
    text-align: center;
    font-family: Helvetica;
    background-color: #2c2f33;
    @media (max-width: 950px) {
        width: 60vw;
        border: 4px solid white;
    }

    .colorContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .colorBox {
        width: 70px;
        height: 70px;
        padding: 10px;
    }

    .icon {
        border-radius: 50%;
    }
    
    div.colorBox > img {
    max-width: 100%;
    max-height: 100%;
}
`;