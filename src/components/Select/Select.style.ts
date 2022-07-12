import styled from "styled-components";

export const SelectContainer = styled.div`
    .radioContainer {
        border: 2px solid white;
        font-family: Arial, Helvetica, sans-serif;
        color: black;
        border-radius: 10px;
        display: flex;
	    gap: 1rem;
        margin: 0 auto;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        background-color: white;
        width: 700px;
    }
    .radioBox{
        flex-direction: row;
        gap: 2rem;
        padding: 2rem;
        border: 1px solid #ddd;
        border-radius: 1rem;
        width: 100px;
        margin: 0 auto;
        width: 200px;
        height: 30  px;
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        background-color: gray;

        :hover {
            background-color: red;
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
        width: 200px;
        margin: 0 auto;
    }
    
`;