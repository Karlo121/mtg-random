import styled from 'styled-components'

export const StyledContainer = styled.div`
    margin:0px;
    height:100vh;
    background-color: #2c2f33;
    color: white;

    @media (max-width: 950px) {
        width: 200vw;      
    }

    body, html{
        padding:0 !important;
        margin:0 !important;
        }

    .name {
        color: red;
        
    }
    .buttonContainer {
        display: flex;
        justify-content: center;
        @media (max-width: 950px) {
            width: 100vw;
        }   
    }
    .subButton {
        width: calc(100% - 50vw);
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 50px;
        height: 100px;
        border-radius: 30px;
        border: 1px solid white;
        color: white;
        font-size: 35px;
        background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%);

        @media (max-width: 950px) {
            width: 100vw;
        }

        :hover {
            background-image: linear-gradient(315deg, #5b6467 0%, orange 74%);
        }
    }

    .genDeckContainer {
        width: calc(100% - 50vw);
        margin: 0 auto;
        border: 1px solid white;
        border-radius: 30px;
        background-color: white;
        margin-bottom: 20px;
        @media (max-width: 950px) {
            margin: 0;
            width: 100vw;
        }   
    }
`
