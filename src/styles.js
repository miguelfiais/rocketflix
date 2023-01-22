import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: rgb(16,45,113);
    background: linear-gradient(45deg, rgba(16,45,113,1) 0%, rgba(10,48,104,1) 9%, rgba(193,42,35,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 20px;

`
export const Title = styled.h2`
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #FFFCF9;
    text-align: center;
    @media screen and (max-width: 600px){
        font-size: 25px;
        line-height: 30px;
    }
`
export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
    svg{
      width: 30px;
      height: auto;
      color: #c12a23;
    }
`

export const Text = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #FFFCF9;
    max-width: 381px;
    text-align: center;
    @media screen and (max-width: 600px){
        font-size: 10px;
    }
`

