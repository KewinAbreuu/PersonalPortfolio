
import React,{useState} from "react";
import HomeImage from  '../../assets/image1.png';
import SobreImage from '../../assets/image2ok.png';
import GitImage from '../../assets/git.svg';

import { Container,Text0, Text1,Text2,Text3,Text4,ContainerBtn,Btn,
  TextBtn,Btn2,TextBtn2,ContainerImg,SubCont,ContainerResume,
   ContainerGeralCards,ContainerSubCards } from './style';

import BottomBar from "../../Componets/BottomBar";
import Sociais from "../../Componets/Sociais";
import CardsSobre from "../../Componets/CardSobre";



export default function Home() {
  return (
      <>
        <Container>
          <BottomBar/>
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
<<<<<<< HEAD
             <img src={HomeImage} style={{width:360.44, height:470, resizeMode:'contain'}}/>
=======
             <Sociais/>
             <img src={HomeImage} style={{marginLeft:'300px'}}/>
>>>>>>> cd7c4780b26895142316b7fd375d9999bc3e400b
          </ContainerImg>
        </Container>

        <Container>
          <SubCont>
            <Text3 style={{marginTop:128}}>Conheça</Text3>
            <Text4>Sobre Mim</Text4>
          </SubCont>
          
          <ContainerResume>
             <img src={SobreImage} style={{marginRight:100}}/>
              <ContainerGeralCards>

                <ContainerSubCards>
                  <CardsSobre icon={GitImage} tittle="Desenvolvedor" desc="Fullstack"/>
                  <CardsSobre icon={GitImage} tittle="Desenvolvedor" desc="Fullstack"/>
                  <CardsSobre icon={GitImage} tittle="Desenvolvedor" desc="Fullstack"/>
                </ContainerSubCards>

                  <Text0>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book.
                  </Text0>

                  <Btn2 style={{marginLeft:-5, marginTop:24}}>
                    <TextBtn2>Vamos Conversar!</TextBtn2>
                  </Btn2>
              </ContainerGeralCards>
         
          </ContainerResume>

              
        </Container>
      </>
  );
}


