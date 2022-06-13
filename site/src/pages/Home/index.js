
import React,{useState} from "react";
import HomeImage from  '../../assets/image1.png'
import { Container, Text1,Text2,Text3,ContainerBtn,Btn,TextBtn,Btn2,TextBtn2,ContainerImg } from './style';


export default function Home() {
  return (
      <>
        <Container>
          <Text1>Olá, Eu Sou</Text1>
          <Text2>Kewin Abreu</Text2>
          <Text3>Fullstack Developer</Text3>
          
          <ContainerBtn>
            <Btn>
              <TextBtn>Download CV</TextBtn>
            </Btn>

            <Btn2>
              <TextBtn2>Vamos Conversar!</TextBtn2>
            </Btn2>
          </ContainerBtn>

          <ContainerImg>
             <img src={HomeImage} style={{width:341.44, height:450, resizeMode:'contain'}}/>
          </ContainerImg>
        </Container>
      </>
  );
}


