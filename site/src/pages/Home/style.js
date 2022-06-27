import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items:center;
  justify-content: center;
  flex-direction:column;
  scroll-behavior: smooth;
`
export const Text1 = styled.h1`
    margin-top: 50px;
    color:#fff;
    font-family: sans-serif;
    font-size: 26px;
`
export const Text0 = styled.h1`
    margin-top: 42px;
    color:#fff;
    font-family: sans-serif;
    font-size: 16px;
    text-align: justify;
    width: 550px;

    @media(max-width:1145px){
      width: 40vw;
    }
    @media(max-width:980px){
      width: 90vw;
    }
`

export const Text2 = styled.h1`
    margin-top: 16px;
    color:#fff;
    font-family: sans-serif;
    font-size: 50px;

`
export const Text3 = styled.h1`
    margin-top: 16px;
    color:#fff;
    font-family: sans-serif;
    font-size: 20px;
    font-weight:300;

`
export const ContainerBtn = styled.div`
    display: flex;
    align-items:center;
    flex-direction:row;;
    margin-top: 48px;

`
export const Btn = styled.div`
    display: flex;
    width:150px;
    height:40px;
    background-color:none;
    border:solid 1px #3E82B5;
    border-radius:5px;
    justify-content: center;
    align-items: center;
    margin-right:10px;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #3E82B5;

    transition: ease-in-out 200ms;

    &:hover{
        background-color:#3E82B5;
        color: #fff;
        cursor: pointer;
    }

`
export const TextBtn = styled.h1`
    font-size: 12px;
    color:#3E82B5;
    font-family: sans-serif;
    font-weight: 300;

`

export const Btn2 = styled.div`
    display: flex;
    width:150px;
    height:40px;
    background-color:#3E82B5;
    border-radius:5px;
    justify-content: center;
    align-items: center;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #fff;

    transition: ease-in-out 200ms;


    &:hover{
        background-color:#87CEFA;
        color: #fff;
        cursor: pointer;
    }

    @media(max-width:400px){
      align-self:flex-start;
    }

`
export const TextBtn2 = styled.h1`
    font-size: 12px;
    color:#fff;
    font-family: sans-serif;
    font-weight: 300;

`

export const ContainerImg = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

export const Text4 = styled.h1`
    font-size: 34px;
    color:#3E82B5;
    font-family: sans-serif;
    font-weight: 700;
    margin-bottom: 20px;
`
export const SubCont = styled.div`
    display: flex;
    flex-direction: column;
`
export const ContainerResume = styled.div`
    display: flex;
    max-width: 100vw;
    flex-direction: row;

    @media(max-width:980px){
       flex-direction: column;
       align-items: center;
    }
`
export const CardSobre = styled.div`
    display: flex;
    flex-direction: column;

    width: 168px;
    height: 153px;

    margin-right: 24px;
    margin-top: 100px;

    border-radius: 20px;
    background-color:#2A2C69;
`

export const ContainerGeralCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerSubCards = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media(max-width:980px){
       flex-direction: column;
       align-items: center;
    }
`

export const ContainerCardExeperience = styled.div`
    display: flex;
    flex-direction: row;

    @media(max-width:1075px){
      flex-direction: column;
    }
`

export const ContainerExperience = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;   
`
export const ContainerServices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;   
`

export const Banner = styled.img`
     width: 360;
     height: 432px;
     margin-Top: 50px;
`

export const BannerSobre = styled.img`
      width: 550px;
      height: 623px;
      z-index: 1;

    @media(max-width:930px){
      width: 396px;
      height: 466px;
    }

`

export const CardServices = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 50px;
    width: 100vw;
    height: auto;

    margin-top: 32px;
    margin-bottom: 500px;

    border-radius: 20px;

    background-color:red;

`
