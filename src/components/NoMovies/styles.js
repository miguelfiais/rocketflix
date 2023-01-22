import styled from "styled-components";

export const BoxNoMovies = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;  
    p{
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #FFFCF9;
    }
    @media screen and (max-width: 600px){
        flex-direction: column;
        p{
            font-size: 16px;
            color: #FFFCF9;
        }
    }
`