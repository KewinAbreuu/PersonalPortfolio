
import styled from 'styled-components'

export const CardSobre = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 168px;
    height: 153px;

    margin-right: 24px;
    margin-top: 100px;

    border-radius: 20px;

    background-color:#2A2C69;

    @media(max-width:1145px){
      width: 138px;
      height: 126px;
    }
    @media(max-width:1035px){
      width: 120px;
      height: 126px;
    }
    @media(max-width:980px){
      margin: 0px 0px 10px 0px;
      width: 90vw;
      height: 153px;
    }
   
`

export const Tittle = styled.h1`
    font-size: 16px;
    color: #fff;
    font-family: sans-serif;
    margin-top: 20px;

`
export const Desription = styled.h1`
    font-size: 12px;
    font-weight: 100;
    color: #fff;
    font-family: sans-serif;
    margin-top: 20px;

`
