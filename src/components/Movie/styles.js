import styled from "styled-components";

export const BoxMovie = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    img{
        max-width: 300px;
        width: 100%;
    }
    @media screen and (max-width: 600px){
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`
export const MovieContent = styled.div`
    h3{
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #FFFCF9;
        margin-bottom: 20px;
    }
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #FFFCF9;
        max-width: 600px;
    }
    @media screen and (max-width: 600px){
        h3{
            font-size: 18px;
            line-height: 25px;
            margin-bottom: 10px;
        }
        p{
            font-size: 12px;
            line-height: 18px;
            max-width: none;
        }
    }
`