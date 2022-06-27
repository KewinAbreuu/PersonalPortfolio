
import styled from 'styled-components'

export const CardSobre = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 466px;
    height: 266px;

    margin-right: 64px;
    margin-top: 32px;

    border-radius: 20px;

    background-color:#2A2C69;

    @media(max-width:1075px){
      margin: 0 0 10px 0;
      width: 100vw;
      border-radius: 0px;
    }
`

export const Tittle = styled.h1`
    font-size: 16px;
    color: #3E82B5;
    font-family: sans-serif;
    margin-top: 40px;

`
export const Desription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`
export const Feature = styled.h1`
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    color: #fff;
    margin-left: 10px;

`
export const ContainerFeature = styled.h1`
   display: flex;
   width: 100%;
   flex-direction: row;
   justify-content: space-around;
`
