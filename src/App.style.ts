import styled from 'styled-components'

export const StyledContainer = styled.div`
    margin:0px;
    min-width: 100vw;
    height:100vh;
    background-color: #2c2f33;
    border: 1px solic white;
    color: white;

    @media (max-width: 950px) {
        width: 200vw;      
    }

    .name {
        color: red;
        
    }
    .buttonContainer {
        display: flex;
        justify-content: center;
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
    }
`
