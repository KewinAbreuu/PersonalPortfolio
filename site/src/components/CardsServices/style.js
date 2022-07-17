import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    margin-bottom: 100px;
    margin-right: 10px;

    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;

    @media(max-width: 970px){
      margin-right: 0px;
      margin-bottom: 20px;
    }

`
export const Header = styled.div`
    width: 100%;
    height: 80px;
    background-color: #3E82B5;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    z-index: 2;

`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-top: -50px;
  z-index: 1;
  background-color: #2A2C69;
  padding: 80px 0px 0px 0px;

  border-bottom-left-radius:30px;
  border-bottom-right-radius:30px;
`
export const TextHeader = styled.h1`
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 300;
  color:#000;
  z-index: 3;
`
export const TextInfos = styled.h1`
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 300;
  color:#fff;
  z-index: 3;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-left: 30px;
`
export const CheckInfos = styled.img`
  width: 16px;
  height: 16px;
  margin-right:20px;
`
